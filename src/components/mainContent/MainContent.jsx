import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  filteredBySearchInput,
  filteredByDate,
} from '../../store/slices/filters';

import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import styles from './MainContent.module.scss';

const MainContent = ({ openMenu, children }) => {
  const match = useMatch('/word/:id/:action');
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filters.search);

  const onSearch = (e) => {
    const value = e.target.value;
    dispatch(filteredBySearchInput(value));
    value.length === 0 && dispatch(filteredByDate());
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerMenu}>
          <Menu className={styles.menu} onClick={openMenu} />
          <label className={styles.search}>
            <Search className={styles.searchIcon} />
            <input
              value={searchValue}
              onChange={onSearch}
              type='text'
              placeholder='Search'
              className={styles.searchInput}
            />
          </label>
        </div>
        <hr />
      </header>
      {!match && (
        <Link to='/word/new/add' className={styles.newWordLink}>
          +
        </Link>
      )}
      {children}
    </main>
  );
};

export default MainContent;
