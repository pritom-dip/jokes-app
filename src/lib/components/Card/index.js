import classNames from "classnames";
import styles from "./Card.module.scss";
import RightArrowIcon from "../../assets/images/rightArrow.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={classNames(styles.card)}>
      <div className={styles.cardContent}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>Animal</div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </div>

        <Link
          to="/"
          className={classNames(
            styles.statWrapper,
            styles.flexEnd,
            styles.alignCenter
          )}
        >
          <div className={styles.stat}>See stats</div>
          <img src={RightArrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
