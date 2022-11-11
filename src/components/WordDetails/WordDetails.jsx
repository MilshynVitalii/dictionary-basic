import DescriptionListItem from './descriptionListItem/DescriptionListItem';

import styles from './WordDetails.module.scss';

function WordDetails({word}) {
  const wordDetails = [
    {term: 'Definition', details: word.definition},
    {term: 'Synonyms', details: word.synonyms},
    {term: 'Antonyms', details: word.antonyms},
    {term: 'Usage examples', details: word.examples}
  ]

  return (
    <article>
      <header>
        <h4 className={styles.word}>
          {word.en}
          <span className={styles.transcription}> [{word.transcription}] </span>
          - {word.ru}
        </h4>
      </header>
      <dl className={styles.descrList}>
        {
          wordDetails.map(item => (
            <DescriptionListItem key={item.term} heading={item.term} info={item.details} />
          ))
        }
      </dl>
    </article>
  )
}

export default WordDetails;