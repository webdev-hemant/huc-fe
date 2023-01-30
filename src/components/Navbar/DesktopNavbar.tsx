import Image from "next/image";
import React from "react";
import logo from "@/images/og-logo.png";
import { NavArray } from "@/constants/NavbarLinks";
import styles from "./desktopNavbar.module.scss";

const DesktopNavbar = ({ handleNavClick = (_: string) => {} }) => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={logo}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <ul className={styles.navListContainer}>
        {NavArray.map((item: string) => (
          <li
            key={item}
            onClick={() => handleNavClick(item)}
            className={`${styles.titleName} ${styles.active}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
