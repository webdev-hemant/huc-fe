import { NavArray } from "@/constants/NavbarLinks";
// import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "./mobileNavbar.module.scss";

const MobileNavbar = () => {
  return (
    <nav className={styles.navWrapper}>
      {/* <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={logo}
          alt=""
          width={100}
          height={100}
        />
      </div> */}
      <div className={styles.hiddenNavbarContainer}>
        <div className={styles.crossIcon}>
          <RxCross2 />
        </div>
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
