import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { wordAdded, wordChanged, selectWordById } from '../../store/slices/dictionary';

import WordForm from './wordForm/WordForm';

function WordHandlePanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const word = useSelector(state => selectWordById(state, id));

  let submitHandler = (values) => { dispatch(wordAdded(values)); navigate('/') };

  if(word) {
    submitHandler = (values) => { dispatch(wordChanged({id, ...values})); navigate(`/word/${id}`) };

    return <WordForm type='change' handle='Change' values={word} submitHandler={submitHandler} />
  }

  return <WordForm type='addition' handle='Add' submitHandler={submitHandler} />
}

export default WordHandlePanel;