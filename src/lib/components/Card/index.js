import classNames from "classnames";
import styles from "./Card.module.scss";
import RightArrowIcon from "../../assets/images/rightArrow.png";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { value, categories } = data || {};

  return (
    <div className={classNames(styles.card)}>
      <div
        className={classNames(
          styles.cardContent,
          styles.directionColumn,
          styles.flexBetween
        )}
      >
        <div>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              {categories && categories.length > 0 ? categories[0] : "No name"}
            </div>
          </div>
          <div className={styles.content}>{value}</div>
        </div>

        <Link
          to="/"
          className={classNames(
            styles.statWrapper,
            styles.flexEnd,
            styles.alignEnd
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
