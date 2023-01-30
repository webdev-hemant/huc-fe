import React, { Dispatch, SetStateAction } from "react";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";
// import styles from "./header.module.scss";

const Header = ({
  setShowModal = () => {},
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleNavClick = (item: string) => {
    switch (item) {
      case "Join now":
        console.log(item);
        setShowModal(true);
        break;
      default:
        console.log(item);
    }
  };
  return (
    <header>
      <DesktopNavbar handleNavClick={handleNavClick} />
      <MobileNavbar handleNavClick={handleNavClick} />
      {/* Header */}
    </header>
  );
};

export default Header;
