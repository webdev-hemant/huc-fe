import React, { Dispatch, SetStateAction } from "react";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";
// import styles from "./header.module.scss";

const Header = ({
  setShowModal = () => {},
  setShowNav,
  showNav,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowNav: React.Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}) => {
  const handleNavClick = (item: string) => {
    switch (item) {
      case "Join now":
        setShowNav(true);
        setShowModal(true);
        break;
      default:
        console.log(item);
    }
  };
  return (
    <header>
      <DesktopNavbar handleNavClick={handleNavClick} />
      <MobileNavbar
        handleNavClick={handleNavClick}
        setShowNav={setShowNav}
        showNav={showNav}
      />
      {/* Header */}
    </header>
  );
};

export default Header;
