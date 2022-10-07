import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import SingleJoke from "../../components/SingleJoke";
import {
  filterByCategory,
  filterCategoryByEmpty,
  getSingleJoke,
} from "../../features/jokes/jokesSlice";
import styles from "./Joke.module.scss";
import Submit from "../../components/Submit";

const Joke = () => {
  const { id } = useParams();
  const { joke, data } = useSelector((state) => state.jokes) || {};
  const { data: relativeData, loading } =
    useSelector((state) => state.jokes) || {};
  const dispatch = useDispatch();
  const { filteredData } = relativeData || {};

  useEffect(() => {
    if (data?.results?.length > 0) {
      dispatch(getSingleJoke(id));
    }
  }, [id, data]);

  useEffect(() => {
    if (joke?.categories?.length > 0) {
      dispatch(filterByCategory(joke.categories[0]));
    } else {
      dispatch(filterCategoryByEmpty(""));
    }
  }, [joke]);

  return (
    <div className={styles.mainSection}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={classNames(styles.wrapper)}>
            <SingleJoke filteredData={filteredData || []} />
          </div>
          <Submit />
        </>
      )}
    </div>
  );
};

export default Joke;
