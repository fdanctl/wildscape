import React from "react";
import styles from "./styles.module.css";

function Filter({ options, selectedOption, onOptionChange }) {
  return (
    <div className={styles.filterContainer}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.filterButton} ${
            selectedOption === option && styles.active
          }`}
          onClick={() => onOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Filter;
