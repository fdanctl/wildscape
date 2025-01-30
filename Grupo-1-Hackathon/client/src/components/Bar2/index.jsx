import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faFish,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const Bar2 = ({ name, subtype, quant, time, onchange }) => {
  return (
    <div className={styles.bar} onChange={onchange}>
      <input type="checkbox" />
      <p>{name}</p>
      <p>{subtype}</p>
      <p>{quant}</p>
      <p>{time}</p>
    </div>
  );
};

export default Bar2;
