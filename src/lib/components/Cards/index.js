import Card from "../Card";
import styles from "./Cards.module.scss";
import classNames from "classnames";

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.headerContent}>
          <span>Social Jokes</span>
        </p>
      </div>
      <div className={classNames(styles.cardWrapper, styles.wrap)}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
