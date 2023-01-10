import { useState, FocusEvent } from "react";
import { FormikHelpers } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import { Word } from "../../store/types";
import {
  useAddWordMutation,
  useGetWordByNameQuery,
} from "../../store/slices/api";

import WordForm from "./wordForm/WordForm";

const WordAddForm = () => {
  const navigate = useNavigate();
  const [newWord, setNewWord] = useState("");
  const { data, isFetching } = useGetWordByNameQuery(newWord);
  const [addWord] = useAddWordMutation();

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "word") {
      setNewWord(e.target.value);
    }
  };

  const submitHandler = (values: Word, actions: FormikHelpers<Word>) => {
    if (isFetching) return false;

    if (data && data.length) {
      actions.setFieldError(
        "word",
        "Your dictionary already includes this word"
      );

      return false;
    }

    addWord({ ...values, id: nanoid(), date: Date.now() });
    navigate("/");

    return true;
  };

  return (
    <WordForm
      type="addition"
      handle="Add"
      blurHandler={blurHandler}
      submitHandler={submitHandler}
    />
  );
};

export default WordAddForm;
