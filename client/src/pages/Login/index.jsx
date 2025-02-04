import React, { useState } from "react";
import styles from "./styles.module.css";
import ImageDog from "../../assets/images/dog.png";
import ImageMonkey from "../../assets/images/monkey.png";
import Logo from "../../assets/images/logo.png";
import Card from "../../components/Card";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={Logo} alt="Logo Image" className={styles.logo} />
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <>
          <Link to="/admin">
            <Card title={"ADMINISTRATOR"} side={"left"}></Card>
          </Link>
          <img src={ImageDog} alt="Dog Image" className={styles.imageDog} />
        </>
        <>
          <Link to="/employee">
            <Card title={"EMPLOYEE"} side="right"></Card>
          </Link>
          <img
            src={ImageMonkey}
            alt="Monkey Image"
            className={styles.imageMonkey}
          />
        </>
      </div>
    </div>
  );
};

export default Login;
