import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React, { FormEvent, useState } from 'react';

interface ISearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [value, setValue] = useState<string>('');

  const onSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="search-bar"
        className="text"
        onInput={(event?: React.FormEvent<HTMLDivElement>) => {
          event?.preventDefault();
          setValue((event?.target as HTMLInputElement).value as string);
        }}
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
      {/* </Container> */}
    </form>
  );
};

export default SearchBar;
