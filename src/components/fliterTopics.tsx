// src/components/Filter.tsx
import React, { useContext } from "react";
import {
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { AngleDownIcon } from "../assets/icons";
import { LayoutContext } from "../context/layoutWrapper";
import { getUniqueTopics } from "../utils/helpers";

interface FilterTopicProps {
  topic: string;
  onFilter: (topic: string) => void;
}

const Filter: React.FC<FilterTopicProps> = () => {
  const { filterTopic, setFilterTopic, webinars } = useContext(LayoutContext);
  const uniqueTopics = getUniqueTopics(webinars);
  return (
    <div>
      <FormControl variant="outlined" sx={{ width: "220px" }}>
        <Select
          value={filterTopic}
          onChange={(e) => setFilterTopic(e.target.value)}
          displayEmpty
          inputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AngleDownIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "220px",
            height: '44px',
            borderRadius: "10px",
          }}
        >
          <MenuItem value="">
            <Typography variant="h5">All Topics</Typography>
          </MenuItem>
          {uniqueTopics.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              <Typography variant="h5">{topic}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
