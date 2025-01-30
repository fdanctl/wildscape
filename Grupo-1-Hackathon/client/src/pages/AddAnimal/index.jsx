import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const AddAnimal = () => {
  return (
    <div className={styles.animalCareLog}>
      <BackgroundBox>
        <h1 className={styles.title}>Wildlife</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
      </BackgroundBox>
    </div>
  );
};

export default AddAnimal;
