import React, { useState } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AnimalCareLog = () => {
  return (
    <div className={styles.animalCareLog}>
      <BackgroundBox>
        <h1 className={styles.title}>Animal Care Log</h1>
        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
      </BackgroundBox>
    </div>
  );
};

export default AnimalCareLog;
