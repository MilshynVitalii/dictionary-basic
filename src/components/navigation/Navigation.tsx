import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    cn(styles.link, { [styles.active]: isActive });

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/" end className={linkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercises" className={linkStyles}>
            Exercises
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
