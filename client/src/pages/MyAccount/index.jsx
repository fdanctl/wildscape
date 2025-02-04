import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import Button from "../../components/Button"; // Import the Button component

const MyAccount = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3045/api/employees/123");
      const body = await response.json();

      setData(body);
    };
    getData();
  }, []);

  return (
    <div className={styles.myaccount}>
      <BackgroundBox>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <h1 className={styles.title}>MY ACCOUNT</h1>
        <div className={styles.details}>
          <p>Employee: {data.name}</p>
          <p>Employee Nrº: {data.employeeNr}</p>
          <p>Telephone: {data.tel}</p>
          <p>E-mail: {data.email}</p>
        
        <Button onClick={() => window.location.href = "/"} color={"green"} className={styles.logoutButton} label={"Logout"}/>
        </div>
      </BackgroundBox>
    </div>
  );
};

export default MyAccount;
