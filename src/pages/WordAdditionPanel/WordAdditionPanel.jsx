import cn from 'classnames';

import controls from './controlsData';
import styles from './WordAdditionPanel.module.scss';


/**
 * @todo:
 *  1) Panel should accept url params (new/edit) to show specific pages
 *  2) Hide fixet button (+) on this page
 *  3) active inputs should move up
 */


function WordAdditionPanel() {
  return (
    <form>
      <fieldset className={styles.form}>
        {
          controls.map(({placeholder, type, active, button}) => (
            <p key={placeholder} className={styles.controls}>
              {
                active && <input className={styles.inputField} type={type} placeholder={placeholder}/>
              }
              {
                button &&
                <input 
                  type='button' 
                  value={active ? '\u00D7' : '+ ' + button} 
                  className={cn(styles.button, {[styles.active]: active})}
                />
              }
            </p>
          ))
        }
        <input type='submit' value='Add' className={styles.addNewWord}/>
      </fieldset>
    </form>
  )
}

export default WordAdditionPanel;