import React from "react";
import BackgroundBox from "../../components/BackgroundBox";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import SearchField from "../../components/Searchfield";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Wildlife = () => {
  return (
    <span className={styles.wildlife}>
      <BackgroundBox>
        <h1 className={styles.title}>Wildlife</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <div className={styles.container}>
          <SearchField className={styles.searchField} />
          <Button color={"green"} label={"Add"} />
        </div>
      </BackgroundBox>
    </span>
  );
};

export default Wildlife;
