import { useParams, Link, useNavigate } from "react-router-dom";
import moment from "moment";

import { useGetWordQuery, useRemoveWordMutation } from "../../store/slices/api";

import ErrorPopup from "../../components/errorPopup/ErrorPopup";
import styles from "./WordDetails.module.scss";

export const wordDetailsFields = [
  "Word",
  "Translation",
  "Transcription",
  "Frequency",
  "Definition",
  "Synonyms",
  "Antonyms",
  "Examples",
];

const WordDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) throw new Error("Word not found");

  const { data: word, isError, error } = useGetWordQuery(id);
  const [removeWord] = useRemoveWordMutation();

  const handleRemove = () => {
    removeWord(id);

    navigate("/");
  };

  if (!word)
    return (
      <section>
        <h2>No word found</h2>
      </section>
    );

  return (
    <section>
      {isError && <ErrorPopup error={error} />}
      <h2>{`Details of "${word.word}"`}</h2>
      <div className={styles.container}>
        <time className={styles.date}>{moment(word.date).format("LLL")}</time>
        <article className={styles.wordContainer}>
          {wordDetailsFields.map((field) => (
            <dl key={field} className={styles.descrList}>
              <div className={styles.descr}>
                <dt className={styles.descrName}>{field}:</dt>
                <dd className={styles.descrInfo}>
                  {word[field.toLowerCase() as keyof typeof word]}
                </dd>
              </div>
            </dl>
          ))}
        </article>
        <div className={styles.itemControls}>
          <Link to={`/word/${word.id}/edit`}>
            <button className={styles.editItem}>&#9998;</button>
          </Link>
          <button className={styles.removeItem} onClick={handleRemove}>
            &times;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WordDetails;
