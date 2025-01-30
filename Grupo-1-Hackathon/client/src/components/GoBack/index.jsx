import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
import styles from './styles.module.css';

const GoBack = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.circle}>
    <button className={styles.backButton} onClick={handleBackClick}>
      <ReplyIcon />
    </button>
    </div>
  );
};

export default GoBack;
