import { useSelector } from 'react-redux';

import Dictionary from '../../components/Dictionary';
import WordAdditionPanel from '../../components/WordAdditionPanel';
import Filters from '../../components/Filters';

function Home() {
  const words = useSelector(state => state.words);

  return (
    <>
      <h2>My Words</h2>
      <Filters />
      <WordAdditionPanel />
      <Dictionary words={words} />
    </>
  )
}

export default Home;
