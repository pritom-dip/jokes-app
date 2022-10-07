import styles from "./Badge.module.scss";

const Badge = ({ name }) => {
  return (
    <div className={styles.headerWrapper}>
      <p className={styles.headerContent}>
        <span>{name}</span>
      </p>
    </div>
  );
};

export default Badge;
