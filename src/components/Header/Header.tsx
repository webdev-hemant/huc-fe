import React from "react";
// import styles from "./header.module.scss";

type IProps = {
  children: React.ReactNode;
};

const Header = ({ children }: IProps) => {
  return (
    <header>
      {children}
      Header
    </header>
  );
};

export default Header;
