import React from "react";
import styles from "./styles.module.css";
import Textfield from "../../components/Textfield/index.jsx";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/index.jsx";
import Bar from "../../components/Bar/index.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Login2 = () => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.login2}>
      <img src={Logo} alt="Logo Image" className={styles.logo} />
      <Link to="/" className={styles.link}>
        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.icon} />
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.textfieldsContainer}>
          <div className={styles.textfieldUserPass}>
            <Textfield
              placeholder="Employee Number"
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
            />
            <Textfield
              placeholder="Employee Number"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/dashboard">
            <Button label="Login" color="green" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login2;
