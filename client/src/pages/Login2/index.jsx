import React from "react";
import styles from "./styles.module.css";
import Textfield from "../../components/Textfield/index.jsx";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/Button/index.jsx";
import Bar from "../../components/Bar/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Login2 = () => {
  const [employeeNr, setEmployeeNr] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignIn(e) {
    // e.preventDefault();
    if (!employeeNr || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const response = await fetch("http://localhost:3045/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeNr: Number(employeeNr),
        password: password,
      }),
    });

    if (response.status === 200) {
      console.log("Login efetuado com sucesso");
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
      // alert("Email or password are incorrect.");
    }
  }
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
              value={employeeNr}
              onChange={(e) => setEmployeeNr(e.target.value)}
            />
            <Textfield
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <Link to="/dashboard"> */}
          <Button label="Login" color="green" onClick={() => handleSignIn()} />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login2;
