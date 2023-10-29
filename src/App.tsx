import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListPhoto from './components/ListPhoto';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const onSearch = async (searchValue: string) => {
    setIsLoading(true);

    try {
      const { data } = await axios({
        method: 'get',
        url: `https://api.pexels.com/v1/search`,
        params: {
          query: searchValue,
        },
        headers: {
          Authorization: 'z6i8k7hWWINCIZOfVlwuj0N0sIeOgSbD2G5eA6qKWViOMQZixUdDlMWW',
        },
      });
      setPhotos(data.photos);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ListPhoto isLoading={isLoading} photos={photos} />
    </>
  );
};

export default App;
