import { useFormik } from 'formik';
import cn from 'classnames';

import { fieldsData, formikConfig } from './formConfig';
import styles from './WordForm.module.scss';

/**
 * check values, formik should receive only relevant values
 */

const WordForm = ({values = formikConfig.initialValues, type, handle, submitHandler}) => {
  const onSubmit = (values, actions) => {
    actions.resetForm();
    
    submitHandler(values);
  }

  const formik = useFormik({
    initialValues: values,
    validationSchema: formikConfig.validationSchema,
    onSubmit
  });

  const resetField = (fieldName) => () => formik.setFieldValue(fieldName, '');
  const checkHasFieldError = (fieldName) => formik.touched[fieldName] && formik.errors[fieldName];

  return (
    <section>
      <h2>Word {type}</h2>
      <form onSubmit={formik.handleSubmit}>
        <fieldset className={styles.form}>
          {
            fieldsData.map(({name, type, placeholder, optional}) => (
              <label key={name} className={styles.controls}>
                {
                  optional && !formik.isSubmitting  && <>
                    <input type="checkbox" className={styles.fieldActive} defaultChecked={!values[optional]}/>
                    <span 
                      className={styles.fieldBtnControl} 
                      onClick={resetField(name)}
                    >
                      {`+ ${optional}`}
                    </span>
                  </>
                }

                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[name]}
                  className={cn(styles.inputField, {[styles.fieldError]: checkHasFieldError(name)})}
                />
                {
                  checkHasFieldError(name) && <p className={styles.error}>{formik.errors[name]}</p>
                }
              </label>
            ))
          }
          
          <input type='submit' value={handle} className={styles.addNewWord}/>
        </fieldset>
      </form>
    </section>
  )
}

export default WordForm;