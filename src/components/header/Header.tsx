import cn from "classnames";
import { Link } from "react-router-dom";

import Navigation from "../navigation/Navigation";

import styles from "./Header.module.scss";

interface HeaderProps {
  isOpen: boolean;
  openMenu: () => void;
}

const Header = ({ isOpen, openMenu }: HeaderProps) => (
  <header className={cn(styles.header, { [styles.open]: isOpen })}>
    <Link to="/">
      <h1 className={styles.homeLink}>MyDictionary</h1>
    </Link>
    <Navigation />
    {/* eslint-disable-next-line */}
    <div className={styles.bg} onClick={openMenu} />
  </header>
);

export default Header;
