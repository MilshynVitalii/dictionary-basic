import cn from 'classnames';
import { Link } from 'react-router-dom';

import Navigation from '../navigation/Navigation';

import styles from './Header.module.scss';

function Header({isOpen, openMenu}) {
  return (
    <header className={cn(styles.header, {[styles.open]: isOpen})}>
      <Link to="/"><h1 className={styles.homeLink}>MyDictionary</h1></Link>
      <Navigation />
      <div className={styles.bg} onClick={openMenu}/>
    </header>
  )
}

export default Header;