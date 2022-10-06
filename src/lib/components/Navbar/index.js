import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const menus = [
  {
    name: "Menu 1",
    link: "#",
    submenu: [],
  },
  {
    name: "Menu 2",
    link: "#",
    submenu: [],
  },
  {
    name: "Menu 3",
    link: "#",
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
                <div>{menu?.name}</div>
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
