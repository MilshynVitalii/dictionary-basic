import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { filterDictionary } from "../../store/slices/filters";

import styles from "./Dictionary.module.scss";

const Dictionary = ({ words, isFetching }) => {
  const filter = useSelector((state) => state.filters);
  const filteredDictionary = filterDictionary(
    words,
    filter.type,
    filter[filter.type]
  );

  return (
    <section className={styles.dictionary}>
      <ul className={styles.container}>
        {filteredDictionary.length > 0 ? (
          filteredDictionary.map((word) => (
            <li key={word.id} className={styles.wordWrapper}>
              <div className={styles.wordMeta}>
                <time>{moment(word.date).format("DD/MM/YYYY")}</time>
                <span>frequency: #{word.frequency}</span>
              </div>
              <h4 className={styles.word}>
                {word.word}
                <span className={styles.wordTranslation}>
                  {word.translation}
                </span>
              </h4>
              <Link to={`/word/${word.id}`} className={styles.wordDetails}>
                View Details...
              </Link>
            </li>
          ))
        ) : (
          <li className={styles.noWords}>
            {isFetching ? "Words are loading..." : "No words yet"}
          </li>
        )}
      </ul>
    </section>
  );
};

export default Dictionary;
