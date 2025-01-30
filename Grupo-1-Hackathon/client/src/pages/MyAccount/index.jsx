import React, { useState } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MyAccount = () => {
  return (
    <div className={styles.myaccount}>
      <BackgroundBox>
        <h1 className={styles.title}>My Account</h1>
        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
      </BackgroundBox>
    </div>
  );
};

export default MyAccount;
