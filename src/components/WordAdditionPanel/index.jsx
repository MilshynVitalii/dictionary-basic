/**
 * @todo:
 *  1) Define the HTML form structure
 *  2) Decide between <input type="button/checkbox" value="+..." /> for the inputs addition
 */

function WordAdditionPanel() {
  return (
    <section>
      <form>
        <fieldset>
          <p>
            <input type="text" placeholder='New word'/>
            <input type="text" placeholder='Translation'/>
            <input type="submit" value="Add" />
          </p>
          <p><input type="text" placeholder='Transcription'/></p>
          <p><input type="text" placeholder='Definition'/></p>
          <p><input type="text" placeholder='Synonyms'/></p>
          <p><input type="text" placeholder='Antonyms'/></p>
          <p><textarea placeholder='examples'></textarea></p>
          <p>
            <input type="button" value='+ transcription'/>
            <input type="button" value='+ definition'/>
            <input type="button" value='+ synonyms'/>
            <input type="button" value='+ antonyms'/>
            <input type="button" value='+ examples'/>
          </p>
        </fieldset>
      </form>
    </section>
  )
}

export default WordAdditionPanel;