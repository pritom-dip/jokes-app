import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./RelativeProjects.module.scss";

const RelativeProjects = ({ filteredData }) => {
  const datas = useMemo(() => {
    let data = [];
    if (filteredData.length > 10) {
      data = [...filteredData].slice(0, 5);
    } else {
      data = filteredData;
    }
    return data;
  }, [filteredData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Top 5 projects this week</div>
      <div className={styles.contentWrapper}>
        {datas?.length > 0 &&
          datas.map((filter) => (
            <Link
              key={filter.id}
              to={`/${filter.id}`}
              className={styles.content}
            >
              {filter.value}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelativeProjects;
