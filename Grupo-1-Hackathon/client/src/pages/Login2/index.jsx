import React from "react";
import styles from "./styles.module.css";
import Textfield from "../../components/Textfield/index.jsx";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/index.jsx";
import Bar from "../../components/Bar/index.jsx";
import { Link } from "react-router-dom";

const Login2 = () => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <img src={Logo} alt="Dog Image" className={styles.logo} />
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
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
        <Link to="/dashboard">
          <Button label="Login" color="green" />
        </Link>
      </div>
    </>
  );
};

export default Login2;
