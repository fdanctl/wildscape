import React from "react";
import styles from "./styles.module.css";

const Card = ({ title, content, side, onClick, backgroundColor }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${styles[side]} ${styles[backgroundColor]}`}
        onClick={onClick}
      >
        <div className={styles.title}>{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
