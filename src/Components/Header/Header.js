import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/download.png";

const Header = () => {
  const reloadHandler = () => {
    window.location.reload();
  };
  return (
    <nav className={styles.navigation}>
      <img src={img} alt="" onClick={reloadHandler} />
    </nav>
  );
};

export default Header;
