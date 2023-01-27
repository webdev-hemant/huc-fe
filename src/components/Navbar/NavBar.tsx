import React from "react";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <p className={styles.titleName}>my title name</p>
    </nav>
  );
};

export default NavBar;
