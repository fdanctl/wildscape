import React from 'react';
import styles from "./styles.module.css";
import GoBack from '../../components/GoBack';
import Logo from "../../assets/images/logo.png";


const MyAccount = () => {
  const employee = {
    name: 'Prof Jam',
    number: '100252',
    phone: '929158564',
    email: 'exemplo@gmail.com'
  };

  return (
    <div>
    <div className={styles.logo}>
                    <img src={Logo} alt="Wildscape Logo" />
                </div>
    <div className={styles.profileContainer}>
      <GoBack/>
      <h1>My Profile</h1>
      <p><strong>Employee:</strong> {employee.name}</p>
      <p><strong>Employee No:</strong> {employee.number}</p>
      <p><strong>Telephone:</strong> {employee.phone}</p>
      <p><strong>E-mail:</strong> {employee.email}</p>
      <button className={styles.logoutButton}>LOG OUT</button>
    </div>
    </div>
  );
};

export default MyAccount;
