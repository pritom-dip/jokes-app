import Input from "../Common/Input";
import SearchIcon from "../../assets/images/search.png";
import { useCallback, useState } from "react";
import _debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchJokesByName } from "../../features/jokes/jokesSlice";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const { searchedData } = useSelector((state) => state.jokes) || {};

  const dispatch = useDispatch();

  const handleDebounceFn = (text) => {
    dispatch(searchJokesByName(text));
  };
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  const handleChange = (text) => {
    setInputText(text);
    debounceFn(text);
  };

  return (
    <div className={styles.wrapper}>
      <Input
        name="search"
        value={inputText}
        handleChange={handleChange}
        icon={SearchIcon}
        type="text"
        placeholder="Enter Text"
      />
      {searchedData.length > 0 && (
        <div className={styles.result}>
          {searchedData.length > 0 && searchedData.length > 4
            ? searchedData.slice(0, 3).map((data) => (
                <div key={data.id} className={styles.item}>
                  <Link to={`/${data.id}`}>{data.value}</Link>
                </div>
              ))
            : searchedData.map((data) => (
                <div key={data.id} className={styles.item}>
                  <Link to={`/${data.id}`}>{data.value}</Link>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Search;
