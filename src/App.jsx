import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import pages from './pages';

import styles from './App.module.scss';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const openMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={styles.app}>
        <Header isOpen={isMenuOpen} openMenu={openMenu}/>
        <MainContent openMenu={openMenu}>
          <Routes>
            <Route exact path="/" element={pages.home} />
            <Route path="/exercises" element={pages.exercises} />
            <Route path="/word" element={pages.wordAddition} />
            <Route path="*" element={pages.notFound} />
          </Routes>
        </MainContent>
    </div>
  );
}

export default App;
