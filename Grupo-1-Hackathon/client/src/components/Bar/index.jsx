import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const Bar = ({ species, name, medication, food }) => {
  return (
    <div className={styles.bar}>
      <input type="checkbox" />
      <p>{species}</p>
      <p>{name}</p>
      <p>{medication}</p>
      {food === "grass" ? (
        <FontAwesomeIcon />
      ) : food === "fruit" ? (
        // <BananaIcon
        //   className={styles.icon}
        //   size={24}
        //   color={"#737373"}
        //   variant={"stroke"}
        // />
        <FontAwesomeIcon icon={faFish} />
      ) : (
        // <FishFoodIcon
        //   className={styles.icon}
        //   size={24}
        //   color={"#737373"}
        //   variant={"stroke"}
        // />
        <FontAwesomeIcon icon={faFish} />
      )}
    </div>
  );
};

export default Bar;
