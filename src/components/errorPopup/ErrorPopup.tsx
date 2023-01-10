import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import styles from "./ErrorPopup.module.scss";

interface ErrorPopupProps {
  error?: FetchBaseQueryError | SerializedError;
}

const ErrorPopup = ({ error }: ErrorPopupProps) => {
  let errorStatus: string | number = "";
  let errorMessage = "Error: Unexpected error was occured";

  if (error) {
    if ("status" in error) {
      errorMessage =
        "error" in error ? error.error : JSON.stringify(error.data);
      errorStatus = error.status;
    } else {
      errorMessage = error.message || "Serialization error was occurred";
    }
  }

  return (
    <div className={styles.errorPage}>
      <h1 className={styles.header}>Oops!</h1>
      <p className={styles.message}>{errorStatus}</p>
      <p className={styles.message}>{errorMessage}</p>
    </div>
  );
};

export default ErrorPopup;
