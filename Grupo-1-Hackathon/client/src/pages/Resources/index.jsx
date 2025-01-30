import { React, useState, useEffect } from "react";
import BackgroundBox from "../../components/BackgroundBox";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import SearchField from "../../components/Searchfield";
import Dropdown from "../../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Bar2 from "../../components/Bar2";
import Filter from "../../components/Filter";

const Resources = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [speciesOptions, setSpeciesOptions] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const dropdownAnimalOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
  ];
  const medicationOptions = [
    { value: "1000", label: "1000" },
    { value: "500", label: "500" },
    { value: "100", label: "100" },
  ];
  const foodOptions = [
    { value: "1 Year", label: "1 Year" },
    { value: "1 Month", label: "1 Month" },
    { value: "1 Week", label: "1 Week" },
  ];
  const filterOptions = ["Select All", "Erase"];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFilterChange = (option) => {
    setSelectedFilter(option);
    console.log("Selected Filter:", option);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3045/api/resources");
      const body = await response.json();

      setData(body);
    };
    getData();
  }, []);

  return (
    <span className={styles.wildlife}>
      <BackgroundBox>
        <h1 className={styles.title}>Resources</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <div className={styles.container}>
          <SearchField
            className={styles.searchField}
            onChange={handleFilterChange}
            value={selectedFilter}
          />
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
            // onChange={handleDropdownChange}
          />
          <Dropdown
            placeholder={"Quantity"}
            options={medicationOptions}
            value={selectedValue}
            // onChange={handleDropdownChange}
          />
          <Dropdown
            placeholder={"Time Remaining"}
            options={foodOptions}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.barContainer}>
          <Filter options={filterOptions}></Filter>
          {data.map((el) => (
            <Bar2
              name={el.name}
              subtype={el.subtype}
              quant={el.quantity}
              time={
                el.daysLeft === "Undetermined"
                  ? "Undetermined"
                  : Math.floor(el.daysLeft)
              }
            />
          ))}
        </div>
      </BackgroundBox>
    </span>
  );
};

export default Resources;
