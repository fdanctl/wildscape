import React from "react";
import styles from "./styles.module.css";

const Button = ({ label, color, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
