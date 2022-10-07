import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><h1>MyDictionary</h1></Link>
      <input type="text" placeholder='Search'/>
    </header>
  )
}

export default Header;