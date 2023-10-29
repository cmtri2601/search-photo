import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

interface ISearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [value, setValue] = useState<string>('');

  const onClick = (event?: React.MouseEvent) => {
    event?.preventDefault();
    onSearch(value);
  };

  return (
    <form>
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
      <IconButton type="submit" aria-label="search" onClick={onClick}>
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
