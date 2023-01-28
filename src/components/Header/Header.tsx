"use client";
import React from "react";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";
// import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
      Header
    </header>
  );
};

export default Header;
