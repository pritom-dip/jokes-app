import Card from "../Card";
import styles from "./Cards.module.scss";
import classNames from "classnames";

const Cards = ({ results }) => {
  if (!results && results.length === 0) {
    return <div>No Data</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.headerContent}>
          <span>Social Jokes</span>
        </p>
      </div>
      <div className={classNames(styles.cardWrapper, styles.wrap)}>
        {results?.map((data) => (
          <Card key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
