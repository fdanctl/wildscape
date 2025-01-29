import React from "react";
import styles from "./styles.module.css";

const Alert = ({ alertTitle }) => {
  return (
    <div className={styles.alert} >
      <strong>{alertTitle}</strong>
    </div>
  );
};

export default Alert;