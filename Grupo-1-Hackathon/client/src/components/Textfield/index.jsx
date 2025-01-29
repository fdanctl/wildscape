import styles from "./styles.module.css";

const Textfield = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={label} className={styles.inputLabel}>
          {label}
          <input
            type={type}
            id={label}
            className={`${styles.inputField} ${styles.withLabel}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </label>
      )}
      {!label && (
        <input
          type={type}
          className={styles.inputField}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Textfield;
