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
            <div className={styles.logo}>
                <img src={Logo} alt="Wildscape Logo" />
            </div>
            <h1 className={styles.title}>DASHBOARD</h1>
            <div className={styles.board}>
                <div className={styles.nav}>
                    <Card title="WILDLIFE">
                        <button className={styles.navButton}>WILDLIFE</button>
                    </Card>
                    <Card title="ANIMAL CARE LOG">
                        <button className={styles.navButton}>ANIMAL CARE LOG</button>
                    </Card>
                    <Card title="MY ACCOUNT">
                        <button className={styles.navButton}>MY ACCOUNT</button>
                    </Card>
                </div>
                <Link to={"/resources"}>
                    <Card title="RESOURCES" content={<PieChart />}>
                        RESOURCES
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
