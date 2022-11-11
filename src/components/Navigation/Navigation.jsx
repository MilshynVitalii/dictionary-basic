import { Link } from "react-router-dom";

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/exercises">Exercises</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;