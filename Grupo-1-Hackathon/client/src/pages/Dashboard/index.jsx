import React from "react";
import styles from "./styles.module.css";
import Card from "../../components/Card/index.jsx";
import Alert from "../../components/Alert/index.jsx";
import PieChart from "../../components/PieChart/index.jsx";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <img src={Logo} alt="Logo Image" className={styles.logo} />
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.board}>
        <div className={styles.nav}>
          <Link to={"/wildlife"}>
            <Card title="WILDLIFE" backgroundColor={"green"}>
              WILDLIFE
            </Card>
          </Link>
          <Link to={"/animalCareLog"}>
            <Card title="ANIMAL CARE LOG" backgroundColor={"green"}>
              ANIMAL CARE LOG
            </Card>
          </Link>
          <Link to={"/myAccount"}>
            <Card title="MY ACCOUNT" backgroundColor={"green"}>
              MY ACCOUNT
            </Card>
          </Link>
        </div>
        <Link to={"/resources"}>
          <Card
            title="RESOURCES"
            backgroundColor={"green"}
            content={<PieChart />}
          >
            RESOURCES
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
