import React from "react";
import styles from "./styles.module.css";

const Alert = ({ alertTitle, alertMessage }) => {
  return (
    <div className={styles.alert} >
      <strong>{alertTitle}</strong>
      <p>{alertMessage}</p>
    </div>
  );
};

export default Alert;