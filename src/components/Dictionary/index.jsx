import React from 'react';

import DictionaryItem from '../DictionaryItem';

/**
 * @todo: 
 *  1) Define the HTML structure of the Dictionary (article elem. instead of ul:li)
 *  3) buttons "delete/edit should be part of the Dictionary not an article with word descr."
 */

function Dictionary({words}) {
  return (
    <section>
      {
        words.map(word => (
            <React.Fragment key={word.id}>
              <DictionaryItem word={word}/>
              <button>edit</button>
              <button>remove</button>
            </React.Fragment>
          )
        )
      }
    </section>
  )
}

export default Dictionary;