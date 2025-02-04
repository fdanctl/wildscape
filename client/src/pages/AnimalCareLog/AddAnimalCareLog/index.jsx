import React, { useState } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Dropdown from "../../../components/Dropdown";
import Textfield from "../../../components/Textfield";
import Button from "../../../components/Button";

const AddAnimalCareLog = () => {
  const [animal, setAnimal] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [assignment, setAssignment] = useState("Feed or Medicate");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.animalCareLog}>
      <BackgroundBox>
        <Link to="/animalCareLog">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <h1 className={styles.title}>Animal Care Log</h1>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label>Employee</label>
            <p>Daniel</p>
          </div>
          <div className={styles.formGroup}>
            <label>Animal</label>
            <Dropdown value={animal} onChange={setAnimal} options={["Option1", "Option2"]} />
          </div>
          <div className={styles.formGroup}>
            <label>Animal Name</label>
            <Dropdown value={animalName} onChange={setAnimalName} options={["Option1", "Option2"]} />
          </div>
          <div className={styles.formGroup}>
            <label>Assignment</label>
            <Dropdown value={assignment} onChange={setAssignment} options={["Feed", "Medicate"]} />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <Textfield value={description} onChange={setDescription} />
          </div>
          <Button color={"green"} label={"Save"} className={styles.saveButton} />
        </div>
      </BackgroundBox>
    </div>
  );
};

export default AddAnimalCareLog;
