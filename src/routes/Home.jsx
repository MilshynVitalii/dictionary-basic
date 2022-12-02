import { useSelector } from 'react-redux';

import { filteredDictionary } from '../store/slices/dictionary';

import Dictionary from '../components/dictionary/Dictionary';
import Filters from '../components/filters/Filters';

function Home() {
  const dictionary = useSelector(filteredDictionary);

  return (
    <section>
      <h2>Dictionary</h2>
      <Filters />
      <Dictionary words={dictionary} />
    </section>
  )
}

export default Home;
