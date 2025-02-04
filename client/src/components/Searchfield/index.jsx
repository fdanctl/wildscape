import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
        endAdornment: (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "inherit" }}
          />
        ),
      }}
      className={styles.searchField}
    />
  );
}

export default SearchField;
