import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faFish, faLeaf } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const Bar = ({ species, name, medication, food, onchange }) => {
  return (
    <div className={styles.bar} onChange={onchange}>
      <input type="checkbox" />
      <p>{species}</p>
      <p>{name}</p>
      <p>{medication}</p>
      {food === "grass" ? (
        <FontAwesomeIcon icon={faLeaf} className={styles.icon} />
      ) : food === "fruit" ? (
        <FontAwesomeIcon icon={faAppleWhole} className={styles.icon} />
      ) : (
        <FontAwesomeIcon icon={faFish} className={styles.icon}/>
      )}
    </div>
  );
};

export default Bar;
