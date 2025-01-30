import React, { useState } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Resources = () => {
  return (
    <div className={styles.resources}>
      <BackgroundBox>
        <h1 className={styles.title}>Resourses</h1>
        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
      </BackgroundBox>
    </div>
  );
};

export default Resources;
