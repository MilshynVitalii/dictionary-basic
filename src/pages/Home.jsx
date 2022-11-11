import { useSelector } from 'react-redux';

import Dictionary from '../components/dictionary/Dictionary';
import Filters from '../components/filters/Filters';

function Home() {
  const words = useSelector(state => state.words);

  return (
    <>
      <Filters />
      <Dictionary words={words} />
    </>
  )
}

export default Home;
