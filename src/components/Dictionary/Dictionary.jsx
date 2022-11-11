import WordDetails from '../wordDetails/WordDetails';

import styles from './Dictionary.module.scss';

function Dictionary({words}) {
  return (
    <section className={styles.dictionary}>
      <ul className={styles.container}>
        {
          words.map(word => (
              <li key={word.id} className={styles.word}>
                <WordDetails word={word}/>
                <div className={styles.itemControls}>
                  <button className={styles.editItem}>&#9998;</button>
                  <button className={styles.removeItem}>&times;</button>
                </div>
              </li>
            )
          )
        }
      </ul>
    </section>
  )
}

export default Dictionary;