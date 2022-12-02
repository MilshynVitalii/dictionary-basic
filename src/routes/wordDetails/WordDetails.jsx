import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

import { selectWordById, wordRemoved } from '../../store/slices/dictionary';

import styles from './WordDetails.module.scss';

export const wordDetailsFields = [ 
  'Word',
  'Translation',
  'Transcription',
  'Frequency',
  'Definition',
  'Synonyms',
  'Antonyms',
  'Examples'
]

function WordDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const word = useSelector(state => selectWordById(state, id));

  const handleRemove = (id) => () => { dispatch(wordRemoved(id)); navigate('/')};

  return (
    <section>
      <h2>Details of "{word.word}"</h2>
      <div className={styles.container}>
        <time className={styles.date}>{moment(word.date).format('LLL')}</time>
        <article className={styles.wordContainer}>
          {
            wordDetailsFields.map(field => (
              <dl key={field} className={styles.descrList}>
                <div className={styles.descr}>
                  <dt className={styles.descrName}>{field}:</dt>
                  <dd className={styles.descrInfo}>{word[field.toLowerCase()]}</dd>
                </div>
              </dl>
            ))
          }
        </article>
        <div className={styles.itemControls}>
          <Link to={`/word/${word.id}/edit`}>
            <button className={styles.editItem}>&#9998;</button>
          </Link>
          <button className={styles.removeItem} onClick={handleRemove(word.id)}>&times;</button>
        </div>
      </div>
    </section>
  )
}

export default WordDetails;