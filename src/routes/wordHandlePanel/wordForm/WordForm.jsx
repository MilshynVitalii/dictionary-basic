import { useFormik } from "formik";
import cn from "classnames";

import { fieldsData, formikConfig } from "./formConfig";
import styles from "./WordForm.module.scss";

const WordForm = ({
  values = formikConfig.initialValues,
  type,
  handle,
  blurHandler,
  submitHandler,
}) => {
  const onSubmit = (values, actions) => {
    submitHandler(values, actions) && actions.resetForm();
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: formikConfig.validationSchema,
    onSubmit,
  });

  const handleBlur = (e) => {
    formik.handleBlur(e);
    blurHandler && blurHandler(e);
  };

  const handeFieldVisibility = (fieldName) => () =>
    formik.setFieldValue(fieldName, "");

  const checkHasFieldError = (fieldName) =>
    formik.touched[fieldName] && formik.errors[fieldName];

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
                    defaultChecked={!values[optional]}
                  />
                  {/* eslint-disable-next-line */}
                  <span
                    className={styles.fieldBtnControl}
                    onClick={handeFieldVisibility(name)}
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
                value={formik.values[name]}
                className={cn(styles.inputField, {
                  [styles.fieldError]: checkHasFieldError(name),
                })}
              />
              {checkHasFieldError(name) && (
                <p className={styles.error}>{formik.errors[name]}</p>
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
