import React, { useState } from "react";
import styles from "./styles.module.css";
import Card from "../../components/Card/index.jsx";
import Alert from "../../components/Alert/index.jsx";
import PieChart from "../../components/PieChart/index.jsx";

const Dashboard = () => {
    return (
      <div className={styles.dashboard}>
        {/* You can use the Alert component here and pass the alertTitle */}
        <Alert alertTitle="ALERT!" alertMessage="Low Resources" />
        
        {/* Other content for your Dashboard */}
        <h1>Welcome to the Dashboard</h1>
      </div>
    );
  };
  
  export default Dashboard;