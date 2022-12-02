import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './Dictionary.module.scss';

function Dictionary({words}) {
  return (
    <section className={styles.dictionary}>
      <ul className={styles.container}>
        {
          words.length > 0
            ? words.map(word => (
                <li key={word.id} className={styles.wordWrapper}>
                  <div className={styles.wordMeta}>
                    <time>{moment(word.date).format('DD/MM/YYYY')}</time>
                    <span>frequency: #{word.frequency}</span>
                  </div>
                  <h4 className={styles.word}>
                    {word.word} 
                    <span className={styles.wordTranslation}>{word.translation}</span>
                  </h4>
                  <Link to={`/word/${word.id}`} className={styles.wordDetails}>View Details...</Link>
                </li>
              )
            )
            : <li className={styles.noWords}>No words</li>
        }
      </ul>
    </section>
  )
}

export default Dictionary;