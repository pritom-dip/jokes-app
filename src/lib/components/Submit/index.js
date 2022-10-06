import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Submit.module.scss";
import RightArrowIcon from "../../assets/images/rightArrow.png";

const Submit = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        styles.flexStart,
        styles.alignCenter
      )}
    >
      <div className={classNames(styles.container)}>
        <div className={styles.header}>Got jokes? get Paid</div>
        <div className={styles.header}>For submitting</div>

        <Link
          to="/"
          className={classNames(
            styles.statWrapper,
            styles.flexStart,
            styles.alignCenter
          )}
        >
          <div className={styles.stat}>submit joke</div>
          <img src={RightArrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Submit;
