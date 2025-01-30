import React from "react";
import styles from "./styles.module.css";

const BackgroundBox = ({ children }) => {
  return <div className={styles.backgroundBox}>{children}</div>;
};

export default BackgroundBox;
