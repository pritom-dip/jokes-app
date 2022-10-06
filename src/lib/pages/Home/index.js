import React from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories";
import Cards from "../../components/Cards";
import Submit from "../../components/Submit";

const Home = () => {
  return (
    <div className={styles.mainSection}>
      <div className={classNames(styles.wrapper)}>
        <Categories />
        <Cards />
      </div>
      <Submit />
    </div>
  );
};

export default Home;
