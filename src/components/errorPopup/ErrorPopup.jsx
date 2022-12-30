import styles from "./ErrorPopup.module.scss";

const ErrorPopup = ({ status, originalStatus, error, data }) => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.header}>Oops!</h1>
      <p className={styles.message}>
        {originalStatus}: {status}
      </p>
      <p className={styles.message}>
        <i>{error}</i>
        <i>{data}</i>
      </p>
    </div>
  );
};

export default ErrorPopup;
