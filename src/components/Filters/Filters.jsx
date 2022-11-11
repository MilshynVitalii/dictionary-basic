import { useState } from 'react';

import styles from './Filters.module.scss';

function Filters() {
  const [isNewFirst, setNewFirst] = useState(true);
  const [isFrequent, setFrequency] = useState(false);

  const changeByNewest = () => setNewFirst(!isNewFirst);
  const changeFrequency = () => setFrequency(!isFrequent);

  return (
    <section className={styles.filters}>
      <p>Filters:</p>
      <div>
        <button className={styles.filter} onClick={changeByNewest}>
          {isNewFirst ? 'New First' : 'Old First'}
        </button>
        <button className={styles.filter} onClick={changeFrequency}>
          {isFrequent ? 'Most Frequent' : 'Less Frequent'}
        </button>
      </div>
    </section>
  )
}

export default Filters;