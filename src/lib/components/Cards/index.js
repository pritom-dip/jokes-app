import Card from "../Card";
import styles from "./Cards.module.scss";
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { useDispatch } from "react-redux";
import { fetchMoreData } from "../../features/jokes/jokesSlice";
import Badge from "../Badge";

const Cards = ({ results, total, fetchedCount }) => {
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  if (!results && results.length === 0) {
    return <div>No Data</div>;
  }

  useEffect(() => {
    if (total > fetchedCount) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [results]);

  const fetchData = () => {
    if (total > fetchedCount) {
      dispatch(fetchMoreData());
    }
  };

  return (
    <div className={styles.wrapper}>
      <Badge name="Social Jokes" />
      <InfiniteScroll
        dataLength={results.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className={classNames(styles.cardWrapper, styles.wrap)}>
          {results?.map((data) => (
            <Card key={data?.id} data={data} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Cards;
