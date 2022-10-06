import styles from "./Hero.module.scss";
import classNames from "classnames";

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
      </div>
    </div>
  );
};

export default Hero;
