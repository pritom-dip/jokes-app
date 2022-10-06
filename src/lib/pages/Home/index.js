import React from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <Categories />
    </div>
  );
};

export default Home;
