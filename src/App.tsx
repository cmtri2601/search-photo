import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListPhoto from './components/ListPhoto';
import axios from 'axios';
import { Box, Container } from '@mui/material';

const PHOTO_PER_PAGE = 80;

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isAllPhoto, setIsAllPhoto] = useState(false);
  const [page, setPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  // handle search event
  const onSearch = async (value: string) => {
    if (!value) {
      setPhotos([]);
    }

    setIsLoading(true);

    try {
      const { data } = await axios({
        method: 'get',
        url: `https://api.pexels.com/v1/search`,
        params: {
          query: value,
          per_page: PHOTO_PER_PAGE,
        },
        headers: {
          Authorization: 'z6i8k7hWWINCIZOfVlwuj0N0sIeOgSbD2G5eA6qKWViOMQZixUdDlMWW',
        },
      });
      setSearchValue(value);
      setPhotos(data.photos);
      setPage(1);
      setTotalResult(data.total_results);
      setIsLoading(false);
      setIsAllPhoto(false);
    } catch (err) {
      setIsLoading(false);
      setIsAllPhoto(false);
      console.log(err);
    }
  };

  // handle load additional photos when scroll end
  const onLoadMore = async () => {
    if (page === 0) {
      return;
    }

    if (page < totalResult / PHOTO_PER_PAGE) {
      setIsLoadingMore(true);

      try {
        const { data } = await axios({
          method: 'get',
          url: `https://api.pexels.com/v1/search`,
          params: {
            query: searchValue,
            per_page: PHOTO_PER_PAGE,
            page: page + 1,
          },
          headers: {
            Authorization: 'z6i8k7hWWINCIZOfVlwuj0N0sIeOgSbD2G5eA6qKWViOMQZixUdDlMWW',
          },
        });
        setPhotos(pre => pre.concat(data.photos));
        setPage(pre => pre + 1);
        setIsLoadingMore(false);
        setIsAllPhoto(false);
      } catch (err) {
        setIsLoadingMore(false);
        setIsAllPhoto(false);
        console.log(err);
      }
    } else {
      setIsAllPhoto(true);
    }
  };

  return (
    <div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <ListPhoto
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          isAllPhoto={isAllPhoto}
          photos={photos}
          onLoadMore={onLoadMore}
        />
      </div>
    </div>
  );
};

export default App;
