import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import DownriangleIcon from "../../assets/images/downTriangle.png";
import UserIcon from "../../assets/images/user.png";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState("");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, styles.flex, styles.flexEnd)}
      >
        {!isMobile ? (
          <ul className={classNames(styles.flex)}>
            {menus?.map((menu) => (
              <Link key={menu.name} to={menu.link}>
                <li className={classNames(styles.item)}>
                  <div
                    className={classNames(styles.heading, styles.flexCenter)}
                  >
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
        ) : (
          <>
            <div
              className={classNames(styles.mobileMenu, styles.directionColumn)}
              onClick={handleClick}
            >
              <div className={styles.hamburger}></div>
              <div className={styles.hamburger}></div>
              <div className={styles.hamburger}></div>
            </div>
            {isOpen && (
              <div className={styles.menuOpen}>
                <div onClick={handleClose} className={styles.close}>
                  X
                </div>
                <ul className={styles.mobileMenuUl}>
                  {menus.length > 0 &&
                    menus.map((menu) => (
                      <li
                        className={styles.mobileItem}
                        key={menu.name}
                        onClick={() => setSubmenuOpen(menu.name)}
                      >
                        <div
                          className={classNames(
                            styles.flex,
                            styles.flexEnd,
                            styles.alignCenter
                          )}
                        >
                          <Link to={menu.link}>{menu.name}</Link>
                          {menu.submenu.length > 0 && (
                            <img
                              className={styles.iconRight}
                              src={DownriangleIcon}
                            />
                          )}
                        </div>
                        {menu?.submenu?.length > 0 && (
                          <ul
                            className={classNames(styles.submenu, {
                              [styles.show]: submenuOpen === menu.name,
                            })}
                          >
                            {menu.submenu.map((sub) => (
                              <li key={sub.name}>{sub.name}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
