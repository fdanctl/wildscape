import React, { useState } from "react";
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
  const [state, setState] = useState({
    name: "",
    age: "",
    species: "",
    dailyNeeds: [],
  });
  const animalOptions = [
    { value: "lion", label: "Lion" },
    { value: "penguin", label: "Penguin" },
    { value: "bear", label: "Bear" },
  ];

  const handleClick = () => {
    fetch("http://localhost:3045/api/animals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: state.name,
        age: state.age,
        species: state.species,
        dailyNeeds: [],
      }),
    });
  };

  const handleChange = (field, value) => {
    setState((ps) => ({ ...ps, [field]: value }));
  };

  return (
    <span className={styles.newAnimal}>
      <BackgroundBox>
        <>
          <h1 className={styles.title}>New Animal</h1>
          <Link to="/wildlife">
            <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
          </Link>
        </>
        <div className={styles.boxContainer}>
          <div className={styles.formContainer}>
            <Dropdown
              onChange={(e) => handleChange("species", e.target.value)}
              label="Animal"
              options={animalOptions}
              className={styles.dropdown}
            />
            <Textfield
              onChange={(e) => handleChange("name", e.target.value)}
              value={state.name}
              name="name"
              label="Name"
              className={styles.textfield}
            />
            <Textfield
              value={state.age}
              name="age"
              label="Age"
              onChange={(e) => handleChange("age", e.target.value)}
              className={styles.textfield}
            />
            <Textfield label="Medication" className={styles.textfield} />
            <Button
              color={"green"}
              label={"Save"}
              className={styles.saveButton}
              onClick={() => handleClick()}
            />
          </div>
          <div className={styles.imagePlaceholder}></div>
        </div>
      </BackgroundBox>
    </span>
  );
};

export default AddAnimal;
