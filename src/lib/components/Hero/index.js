import styles from "./Hero.module.scss";
import classNames from "classnames";
import Search from "../Search";

const Hero = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        styles.flex,
        styles.flexCenter,
        styles.alignCenter
      )}
    >
      <div>
        <h1 className={styles.headerName}>The Joke Bible</h1>
        <p className={styles.content}>Daily Laughs for you and yours</p>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
