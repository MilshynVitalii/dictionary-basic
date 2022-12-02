import { useSelector, useDispatch } from 'react-redux';

import { filteredByDate, filteredByFrequency, filterTypes } from '../../store/slices/filters';

import styles from './Filters.module.scss';

function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters)

  const handleDateFilter = () => dispatch(filteredByDate());
  const handleFrequencyFilter = () => dispatch(filteredByFrequency());

  return (
    <section className={styles.filters}>
      <p>Filtered by {filter.type}:</p>
      <button className={styles.filterBtn}>
        <p>{setFilterFieldText(filter.type, filter[filter.type])} &#9660;</p>
        <ul className={styles.filtersList}>
          <li onClick={handleDateFilter}>{setFilterFieldText(filterTypes.DATE, !filter.date)}</li>
          <li onClick={handleFrequencyFilter}>{setFilterFieldText(filterTypes.FREQUENCY, !filter.frequency)}</li>
        </ul>
      </button>
    </section>
  )
}

function setFilterFieldText(type, isMinToMax) {
  switch(type) {
    case 'date':
      return isMinToMax ? 'new first' : 'old first';
    case 'frequency':
      return isMinToMax ? 'most frequent' : 'less frequent';
    default:
      return '';
  }
}

export default Filters;