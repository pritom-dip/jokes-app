import React from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories";
import Cards from "../../components/Cards";
import Submit from "../../components/Submit";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const Home = () => {
  const { loading, error, data, total, fetchedCount } =
    useSelector((state) => state.jokes) || {};

  return (
    <div className={styles.mainSection}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={classNames(styles.wrapper)}>
            <Categories categories={data?.categories || []} />
            <Cards
              total={total}
              fetchedCount={fetchedCount}
              results={data?.filteredData || []}
            />
          </div>
          <Submit />
        </>
      )}
    </div>
  );
};

export default Home;
