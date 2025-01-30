import { React, useState, useEffect } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Button from "../../components/Button";
import SearchField from "../../components/Searchfield";
import Bar from "../../components/Bar";

const AnimalCareLog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3045/api/animals");
      const body = await response.json();

      setData(body);
    };
    getData();
  }, []);

  return (
    <span className={styles.wildlife}>
      <BackgroundBox>
        <h1 className={styles.title}>Animal Care Log</h1>
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
          {/* <Dropdown
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
          /> */}
        </div>
        <div className={styles.barContainer}>
          {/* <Filter options={filterOptions}></Filter> */}
          {data.map((el) => (
            <Bar
              species={el.species}
              name={el.name}
              medication={"brufen"}
              food={"kj"}
            />
          ))}
        </div>
      </BackgroundBox>
    </span>
  );
};

export default AnimalCareLog;
