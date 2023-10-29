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
        url: `https://pixabay.com/api`,
        withCredentials: false,
        params: {
          key: '40355524-2b37ed1101525fc22f01330c7',
          q: searchValue,
          image_type: 'photo',
          pretty: 'true',
        },
      });
      setPhotos(data.hits);
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
