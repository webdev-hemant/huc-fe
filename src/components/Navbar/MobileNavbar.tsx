"use client";
import { NavArray } from "@/constants/NavbarLinks";
import logo from "@/images/study-logo.jpg";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./mobileNavbar.module.scss";

const MobileNavbar = () => {
  const [showNav, setShowNav] = useState(true);
  console.log({ showNav });
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.mobileNav}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={logo}
            alt=""
            width={100}
            height={100}
          />
        </div>
        {showNav ? (
          <GiHamburgerMenu
            onClick={() => setShowNav(false)}
            style={{ width: "40px", height: "40px" }}
            className={styles.crossIcon}
          />
        ) : (
          <RxCross2
            onClick={() => setShowNav(true)}
            style={{ width: "50px", height: "50px", stroke: "blue" }}
            className={styles.crossIcon}
          />
        )}
      </div>
      <div
        className={`${styles.hiddenNavbarContainer} ${
          showNav && styles.width_0
        }`}
      >
        {/* <div
          onClick={() => setShowNav(true)}
          className={styles.crossIconWrapper}
        >
          <RxCross2
            style={{ width: "50px", height: "50px", stroke: "blue" }}
            className={styles.crossIcon}
          />
        </div> */}
        <ul className={styles.navListContainer}>
          {NavArray.map((item: string) => (
            <li key={item} className={styles.titleName}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
