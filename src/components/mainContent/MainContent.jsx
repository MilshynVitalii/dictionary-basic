import { Link } from 'react-router-dom';

import styles from './MainContent.module.scss';
import {ReactComponent as Menu} from '../../assets/menu.svg';
import {ReactComponent as Search} from '../../assets/search.svg';

function Page({openMenu, children}) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerMenu}>
          <Menu className={styles.menu} onClick={openMenu}/>
          <label className={styles.search}>
            <Search className={styles.searchIcon}/>
            <input type="text" placeholder='Search' className={styles.searchInput}/>
          </label>
        </div>
        <hr />
      </header>
      <Link to='word' className={styles.newWordLink}>+</Link>
      {children}
    </main>
  )
}

export default Page;