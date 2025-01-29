import React, { useState } from "react";
import styles from "./styles.module.css";
import Textfield from "../../components/Textfield/index.jsx";

const Login = () => {
  const [employeeNumber, setEmployeeNumber] = useState("");

  return (
    <Textfield
      placeholder="Employee Number"
      type="text"
      value={employeeNumber}
      onChange={(e) => setEmployeeNumber(e.target.value)}
    />
  );
};

export default Login;
