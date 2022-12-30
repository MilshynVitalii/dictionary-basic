import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import MainContent from "../../components/mainContent/MainContent";

import styles from "./Root.module.scss";

const Root = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const openMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={styles.app}>
      <Header isOpen={isMenuOpen} openMenu={openMenu} />
      <MainContent openMenu={openMenu}>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default Root;
