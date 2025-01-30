import { React, useState, useEffect } from "react";
import BackgroundBox from "../../components/BackgroundBox";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import SearchField from "../../components/Searchfield";
import Dropdown from "../../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Bar from "../../components/Bar";
import Filter from "../../components/Filter";

const Wildlife = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [speciesOptions, setSpeciesOptions] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const dropdownAnimalOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
  ];
  const medicationOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
  ];
  const foodOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
  ];
  const filterOptions = ["Select All", "Erase"];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFilterChange = (option) => {
    // This is the crucial addition
    setSelectedFilter(option);
    console.log("Selected Filter:", option); // Or any other logic you need
  };

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch("/api/animals");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const uniqueSpecies = [
          ...new Set(data.map((animal) => animal.species)),
        ];
        const options = uniqueSpecies.map((species) => ({
          value: species,
          label: species,
        }));

        setSpeciesOptions(options);
      } catch (err) {
        console.error("Error fetching species:", err);
      } finally {
        console.error("Final");
      }
    };

    // fetchSpecies();
  }, []);

  return (
    <span className={styles.wildlife}>
      <BackgroundBox>
        <h1 className={styles.title}>Wildlife</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <div className={styles.container}>
          <SearchField className={styles.searchField} />
          <Link to={"/addAnimal"}>
            <Button color={"green"} label={"Add"} />
          </Link>
        </div>
        <div className={styles.dropdownContainer}>
          <Dropdown
            placeholder={"Type of Animal"}
            options={dropdownAnimalOptions}
            // options={speciesOptions}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
          <Dropdown
            placeholder={"Medication"}
            options={medicationOptions}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
          <Dropdown
            placeholder={"Food"}
            options={foodOptions}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.barContainer}>
          <Filter options={filterOptions}></Filter>
          <Bar
            food={"grass"}
            species={"Lion"}
            name={"oi"}
            medication={"bruf"}
          ></Bar>
          <Bar
            food={"fruit"}
            species={"Monkey"}
            name={"teste"}
            medication={"activ"}
          ></Bar>
          <Bar
            food={"fruit"}
            species={"Monkey"}
            name={"teste"}
            medication={"activ"}
          ></Bar>
          <Bar></Bar>
        </div>
      </BackgroundBox>
    </span>
  );
};

export default Wildlife;
