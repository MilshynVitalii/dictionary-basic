import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import {
  useAddWordMutation,
  useGetWordByNameQuery,
} from '../../store/slices/api';

import WordForm from './wordForm/WordForm';

const WordAddForm = () => {
  const navigate = useNavigate();
  const [newWord, setNewWord] = useState(null);
  const { data, isFetching } = useGetWordByNameQuery(newWord);
  const [addWord] = useAddWordMutation();
  console.log('isFetching', isFetching);

  const blurHandler = (e) => {
    if (e.target.name === 'word') {
      setNewWord(e.target.value);
    }
  };

  const submitHandler = (values, actions) => {
    if (isFetching) return false;

    if (data.length) {
      actions.setFieldError(
        'word',
        'Your dictionary already includes this word'
      );

      return false;
    }

    addWord({ id: nanoid(), date: Date.now(), ...values });
    navigate('/');

    return true;
  };

  return (
    <WordForm
      type='addition'
      handle='Add'
      blurHandler={blurHandler}
      submitHandler={submitHandler}
    />
  );
};

export default WordAddForm;
