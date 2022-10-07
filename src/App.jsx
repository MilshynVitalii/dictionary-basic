import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Exercises from './pages/Exercises';

/**
 * @todo: 
 *  1) Use display: grid to get rid of <div className='remove-this-element'> element
 *  2) Make the app window to match screen dimensions by disableing overflow. Add the overflow only for 
 *     the dictionary section
 *  
 */

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='remove-this-element'>
        <Navigation />
        <main className='main-screen'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
