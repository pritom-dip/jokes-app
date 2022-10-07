import { Link } from "react-router-dom";
import styles from "./RelativeProjects.module.scss";

const RelativeProjects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Top 10 projects this week</div>
      <div className={styles.contentWrapper}>
        <Link to="/" className={styles.content}>
          This is first one
        </Link>
      </div>
    </div>
  );
};

export default RelativeProjects;
