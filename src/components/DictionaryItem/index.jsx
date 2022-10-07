/**
 * @todo:
 *  1) Choose another name for the index folder. Read chapter 2-3 of "Clean Code" by Robert C. Martin
 *  2) Define the HTML structure of the article (header&h4???, dl??)
 *  3) display: flex for divs and remove margins for dd
 */

function DictionaryItem({word}) {
  return (
    <article>
      <header>
        <h4>{word.en}[{word.transcription}] - {word.ru}</h4>
      </header>
      <dl>
        <div>
          <dt>Definition:</dt>
          <dd>{word.definition}</dd>
        </div>
        <div>
          <dt>Synonyms:</dt>
          <dd>{word.synonyms}</dd>
        </div>
        <div>
          <dt>Antonyms:</dt>
          <dd>{word.antonyms}</dd>
        </div>
        <div>
          <dt>Usage examples:</dt>
          <dd>{word.examples}</dd>
        </div>
      </dl>
    </article>
  )
}

export default DictionaryItem;