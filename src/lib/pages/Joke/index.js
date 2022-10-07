import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import SingleJoke from "../../components/SingleJoke";
import { getSingleJoke } from "../../features/jokes/jokesSlice";
import styles from "./Joke.module.scss";
import Submit from "../../components/Submit";

const Joke = () => {
  const { id } = useParams();
  const { loading, joke, data } = useSelector((state) => state.jokes) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.results?.length > 0) {
      dispatch(getSingleJoke(id));
    }
  }, [id, data]);

  return (
    <div className={styles.mainSection}>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <div className={classNames(styles.wrapper)}>
          <SingleJoke />
        </div>
        <Submit />
      </>
      {/* )} */}
    </div>
  );
};

export default Joke;
