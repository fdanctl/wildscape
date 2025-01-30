import React, { useState } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Resources = () => {
  return (
    <div className={styles.resources}>
      <BackgroundBox>
        <h1 className={styles.title}>Resourses</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
      </BackgroundBox>
    </div>
  );
};

export default Resources;
