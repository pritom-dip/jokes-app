import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import styles from "./Categories.module.scss";
import DownArrowIcon from "../../assets/images/downArrow.png";

const defaultCat = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

const Categories = ({ categories = defaultCat }) => {
  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(() => {
    if (categories && categories.length > 7) {
      const filtered = [...categories].slice(7);
      setFilterCategory(filtered);
    } else if (categories && categories.length > 0) {
      setFilterCategory(categories);
    } else {
      setFilterCategory([]);
    }
  }, [categories]);

  const handleClick = (category) => {
    console.log(category);
  };

  if (!categories || categories.length === 0) {
    return <div>No Categories</div>;
  }

  const catLength = useMemo(() => {
    return categories.reduce((total, item) => total + 1, 0);
  }, [categories]);

  const handleLoadMore = () => {
    setFilterCategory(categories);
  };

  return (
    <div
      className={classNames(styles.categoryWrapper, styles.flex, styles.wrap)}
    >
      {filterCategory.length > 0 &&
        filterCategory.map((category, index) => (
          <div className={classNames(styles.category)} key={category}>
            <div
              onClick={() => handleClick(category.toLowerCase())}
              className={classNames(
                styles.item,
                `${styles[`category${index}`]}`
              )}
            >
              {category}
            </div>
          </div>
        ))}
      {categories?.length > filterCategory.length && (
        <div className={classNames(styles.category)}>
          <div
            onClick={handleLoadMore}
            className={classNames(styles.item, styles.loadMore)}
          >
            <span>View all</span>
            <img src={DownArrowIcon} height="18px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
