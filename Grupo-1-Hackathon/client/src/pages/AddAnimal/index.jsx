import React from "react";
import BackgroundBox from "../../components/BackgroundBox";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import SearchField from "../../components/Searchfield";
import Dropdown from "../../components/Dropdown";
import Textfield from "../../components/Textfield";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddAnimal = () => {
  const animalOptions = ["Lion", "Tiger", "Bear"]
  return (
    <span className={styles.wildlife}>
      <BackgroundBox>

        <h1 className={styles.title}>Wildlife</h1>
        <Link to="/wildlife">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <div className={styles.boxContainer}>
        <div className={styles.formContainer}>
          <Dropdown label="Animal" options={animalOptions} className={styles.dropdown} />
          <Textfield label="Name" className={styles.textfield} />
          <Textfield label="Age" className={styles.textfield} />
          <Textfield label="Medication" className={styles.textfield} />
          <Button color={"green"} label={"Save"} className={styles.saveButton} />
        </div>
        <div className={styles.imagePlaceholder}></div>
        </div>
      </BackgroundBox>
    </span>
  );
};

export default AddAnimal;