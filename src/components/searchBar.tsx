import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { SearchIcon } from "../assets/icons";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <TextField
      variant="outlined"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search for webinar"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{height: '44px', width: '400px'}}
    />
  );
};

export default SearchBar;
