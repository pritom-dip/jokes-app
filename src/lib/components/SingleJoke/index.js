import styles from "./SingleJoke.module.scss";
import classNames from "classnames";
import Badge from "../Badge";
import HandIcon from "../../assets/images/hand.png";
import HandDownIcon from "../../assets/images/handDown.png";
import { useDispatch, useSelector } from "react-redux";
import { giveLike, giveDislike } from "../../features/reactions/reactionSlice";
import { useParams } from "react-router-dom";
import RelativeProjects from "../RelativeProjects";

const SingleJoke = () => {
  const { data } = useSelector((state) => state.reactions);
  const { id } = useParams();
  const dispatch = useDispatch();

  const defaultVal = { like: 0, dislike: 0 };
  const handleLikeButtonClicked = (id) => {
    dispatch(giveLike(id));
  };
  const handleDislikeButtonClicked = (id) => {
    dispatch(giveDislike(id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.flex, styles.wrap)}>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.border}>
              <Badge name="Social Jokes" />
              <div className={styles.mainContent}>
                <h3 className={styles.heading}> The Granny Joke</h3>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum!
                </p>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum!
                </p>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.item, styles.secondItem)}>
          <div className={styles.content}>
            <div className={styles.border}>
              <RelativeProjects />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.icons}>
        <div
          className={classNames(
            styles.iconContent,
            styles.directionColumn,
            styles.alignCenter
          )}
          onClick={() => handleLikeButtonClicked(id)}
        >
          <div className={styles.icon}>
            <img src={HandIcon} alt="like" />
          </div>
          <p className={styles.count}>
            {data?.[id] && data?.[id]?.like ? data[id]?.like : 0}
          </p>
        </div>

        <div
          className={classNames(
            styles.iconContent,
            styles.directionColumn,
            styles.alignCenter
          )}
          onClick={() => handleDislikeButtonClicked(id)}
        >
          <div className={classNames(styles.icon, styles.redIcon)}>
            <img src={HandDownIcon} alt="dislike" />
          </div>
          <p className={classNames(styles.count, styles.countRed)}>
            {data?.[id] && data?.[id]?.dislike ? data[id]?.dislike : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleJoke;
