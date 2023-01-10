import { FocusEvent } from "react";
import { useFormik, FormikHelpers } from "formik";
import cn from "classnames";

import { Word } from "../../../store/types";
import { fieldsData, formikConfig } from "./formConfig";
import styles from "./WordForm.module.scss";

interface WordFormProps {
  values?: Word;
  type: string;
  handle: string;
  blurHandler?: (e: FocusEvent<HTMLInputElement>) => void;
  submitHandler: (values: Word, actions: FormikHelpers<Word>) => boolean;
}

const WordForm = ({
  values = formikConfig.initialValues,
  type,
  handle,
  blurHandler,
  submitHandler,
}: WordFormProps) => {
  const onSubmit = (values: Word, actions: FormikHelpers<Word>) => {
    submitHandler(values, actions) && actions.resetForm();
  };

  const formik = useFormik<typeof values>({
    initialValues: values,
    validationSchema: formikConfig.validationSchema,
    onSubmit,
  });

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(e);
    blurHandler && blurHandler(e);
  };

  const handeFieldVisibility = (fieldName: string) => {
    formik.setFieldValue(fieldName, "");
  };

  const checkHasFieldError = (fieldName: string) =>
    formik.touched[fieldName as keyof typeof formik.touched] &&
    formik.errors[fieldName as keyof typeof formik.touched];

  return (
    <section>
      <h2>Word {type}</h2>
      <form onSubmit={formik.handleSubmit}>
        <fieldset className={styles.form}>
          {fieldsData.map(({ name, type, placeholder, optional }) => (
            <label key={name} className={styles.controls}>
              {optional && (
                <>
                  <input
                    type="checkbox"
                    className={styles.fieldActive}
                    defaultChecked={!values[optional as keyof typeof values]}
                  />
                  {/* eslint-disable-next-line */}
                  <span
                    className={styles.fieldBtnControl}
                    onClick={handeFieldVisibility.bind(null, name)}
                  >
                    {`+ ${optional}`}
                  </span>
                </>
              )}

              <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={formik.handleChange}
                onBlur={handleBlur}
                value={formik.values[name as keyof typeof values]}
                className={cn(styles.inputField, {
                  [styles.fieldError]: checkHasFieldError(name),
                })}
              />
              {checkHasFieldError(name) && (
                <p className={styles.error}>
                  {formik.errors[name as keyof typeof values]}
                </p>
              )}
            </label>
          ))}

          <input type="submit" value={handle} className={styles.addNewWord} />
        </fieldset>
      </form>
    </section>
  );
};

export default WordForm;
