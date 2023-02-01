"use client";
import { NavArray } from "@/constants/NavbarLinks";
import logo from "@/images/og-logo.png";
import Image from "next/image";
import React, { useState, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./mobileNavbar.module.scss";

interface IProps {
  handleNavClick: (_: string) => void;
  setShowNav: React.Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}

const MobileNavbar = (props: IProps) => {
  const { handleNavClick = (_) => {}, showNav = true, setShowNav } = props;
  // const [showNav, setShowNav] = useState(true);
  return (
    <nav className={styles.navWrapper}>
      <div className={`${styles.mobileNav} ${showNav || styles.navOpen}`}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={logo}
            alt=""
            width={50}
            height={50}
          />
        </div>
        {showNav ? (
          <GiHamburgerMenu
            onClick={() => {
              document.body.style.overflow = "hidden";
              setShowNav(false);
            }}
            style={{ width: "40px", height: "40px" }}
            className={styles.hamBurger}
          />
        ) : (
          <RxCross2
            onClick={() => {
              document.body.style.overflow = "unset";
              setShowNav(true);
            }}
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
        <ul className={styles.navListContainer}>
          {NavArray.map((item: string) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={styles.titleName}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
