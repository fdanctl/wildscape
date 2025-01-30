import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import BackgroundBox from "../../components/BackgroundBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const MyAccount = () => {
  const [data, setData] = useState({});
  console.log(data);
  console.log(data);

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
        <h1 className={styles.title}>My Account</h1>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
        </Link>
        <p>Employee: {data.name}</p>
        <p>Employee Nrº: {data.employeeNr}</p>
        <p>Telephone: {data.tel}</p>
        <p>E-mail: {data.email}</p>
      </BackgroundBox>
    </div>
  );
};

export default MyAccount;
