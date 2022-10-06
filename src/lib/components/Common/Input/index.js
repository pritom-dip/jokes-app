import styles from "./Input.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Input = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Text" />
      <AiOutlineSearch className={styles.icon} size="30px" />
    </div>
  );
};

export default Input;
