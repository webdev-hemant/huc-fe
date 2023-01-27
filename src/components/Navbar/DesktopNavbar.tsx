"use client";
import Image from "next/image";
import React from "react";
import logo from "@/images/huc-logo-new.png";
import { NavArray } from "@/constants/NavbarLinks";
import styles from "./desktopNavbar.module.scss";

const DesktopNavbar = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={logo}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <ul className={styles.navListContainer}>
        {NavArray.map((item: string) => (
          <li key={item} className={styles.titleName}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
