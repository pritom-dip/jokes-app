import classNames from "classnames";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        styles.flexCenter,
        styles.alignCenter
      )}
    >
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loader;
