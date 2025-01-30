import styles from "./styles.module.css";

const Dropdown = ({ label, options, value, onChange, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={label} className={styles.inputLabel}>
          {label}
          <select
            id={label}
            className={`${styles.inputField} ${styles.withLabel}`}
            value={value}
            onChange={onChange}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label || option.value}
              </option>
            ))}
          </select>
        </label>
      )}
      {!label && (
        <select className={styles.inputField} value={value} onChange={onChange}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
