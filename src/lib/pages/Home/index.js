import React from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories";
import Cards from "../../components/Cards";

const Home = () => {
  return (
    <div className={styles.mainSection}>
      <div className={classNames(styles.wrapper)}>
        <Categories />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
