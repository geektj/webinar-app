// src/components/Filter.tsx
import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { AngleDownIcon } from '../assets/icons';

interface FilterTopicProps {
  topic: string;
  onFilter: (topic: string) => void;
}

const Filter: React.FC<FilterTopicProps> = ({ topic, onFilter }) => {
  return (
    <TextField
      variant="outlined"
      value={topic}
      onChange={(e) => onFilter(e.target.value)}
      placeholder='Topic'
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AngleDownIcon />
          </InputAdornment>
        ),
      }}
      sx={{ width: '220px', '& .MuiInputBase-formControl' : {height: '44px', borderRadius: '10px'}}}
    />
  );
};

export default Filter;