import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      fullWidth
      value={searchTerm}
      onChange={handleSearch}
      InputProps={{
        endAdornment: <SearchIcon className={styles.icon} />,
      }}
      className={styles.searchField}
    />
  );
}

export default SearchField;
