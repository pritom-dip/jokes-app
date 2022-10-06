import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import DownriangleIcon from "../../assets/images/downTriangle.png";
import UserIcon from "../../assets/images/user.png";

const menus = [
  {
    name: "Menu 1",
    link: "#",
    submenu: [],
    icon: "",
  },
  {
    name: "Menu 2",
    link: "#",
    submenu: [],
    icon: "",
  },
  {
    name: "Menu 3",
    link: "#",
    icon: UserIcon,
    submenu: [
      {
        name: "Submenu 1",
        link: "#",
      },
      {
        name: "Submenu 2",
        link: "#",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, styles.flex, styles.flexEnd)}
      >
        <ul className={classNames(styles.flex)}>
          {menus?.map((menu) => (
            <Link key={menu.name} to={menu.link}>
              <li className={classNames(styles.item)}>
                <div className={classNames(styles.heading, styles.flexCenter)}>
                  {menu?.icon && (
                    <img className={styles.iconLeft} src={menu.icon} />
                  )}
                  <span>{menu?.name}</span>
                  {menu.submenu.length > 0 && (
                    <img className={styles.iconRight} src={DownriangleIcon} />
                  )}
                </div>
                {menu.submenu.length > 0 && (
                  <ul className={classNames(styles.submenu)}>
                    {menu.submenu.map((sub) => (
                      <Link key={sub.name} to={sub.link}>
                        <li className={styles.submenuItem}>{sub.name}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
