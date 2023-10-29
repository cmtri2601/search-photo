import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListPhoto from './components/ListPhoto';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const onSearch = async (searchValue: string) => {
    setIsLoading(true);
    await fetch(
      `https://pixabay.com/api/?key=40355524-2b37ed1101525fc22f01330c7&q=${searchValue}&image_type=photo&pretty=true`,
      {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(data => {
        setPhotos(data.hits);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ListPhoto isLoading={isLoading} photos={photos} />
    </>
  );
};

export default App;
