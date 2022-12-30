import { useParams } from 'react-router-dom';

import WordAddForm from './WordAddForm';
import WordChangeForm from './WordChangeForm';

const WordHandlePanel = () => {
  const { id, action } = useParams();

  if (action === 'edit') {
    return <WordChangeForm wordID={id} />;
  }

  return <WordAddForm />;
};

export default WordHandlePanel;
