import { useNavigate } from "react-router-dom";

import { useChangeWordMutation, useGetWordQuery } from "../../store/slices/api";

import { Word } from "../../store/types";
import WordForm from "./wordForm/WordForm";
import ErrorPopup from "../../components/errorPopup/ErrorPopup";

interface WordChangeFormProps {
  wordID: string;
}

const WordChangeForm = ({ wordID }: WordChangeFormProps) => {
  const navigate = useNavigate();
  const { data: word, isError, error } = useGetWordQuery(wordID);
  const [changeWord] = useChangeWordMutation();

  const submitHandler = (values: Word) => {
    changeWord({ ...values, id: wordID });
    navigate(`/word/${wordID}`);

    return true;
  };

  return (
    <>
      {isError && <ErrorPopup error={error} />}
      <WordForm
        type="change"
        handle="Change"
        values={word}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default WordChangeForm;
