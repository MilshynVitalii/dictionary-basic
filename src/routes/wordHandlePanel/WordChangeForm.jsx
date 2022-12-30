import { useNavigate } from 'react-router-dom';

import { useChangeWordMutation, useGetWordQuery } from '../../store/slices/api';

import ErrorPopup from '../../components/errorPopup/ErrorPopup';
import WordForm from './wordForm/WordForm';

const WordChangeForm = ({ wordID }) => {
  const navigate = useNavigate();
  const { data: word = [], isError, error } = useGetWordQuery(wordID);
  const [changeWord] = useChangeWordMutation();

  const submitHandler = (values) => {
    changeWord({ id: wordID, ...values });
    navigate(`/word/${wordID}`);
  };

  return (
    <>
      {isError && <ErrorPopup {...error} />}

      <WordForm
        type='change'
        handle='Change'
        values={word}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default WordChangeForm;
