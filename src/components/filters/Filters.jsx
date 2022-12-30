import { useSelector, useDispatch } from "react-redux";

import {
  filteredByDate,
  filteredByFrequency,
  filterTypes,
} from "../../store/slices/filters";

import styles from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);

  const handleDateFilter = () => dispatch(filteredByDate());
  const handleFrequencyFilter = () => dispatch(filteredByFrequency());

  return (
    <section className={styles.filters}>
      <p>Filtered by {filter.type}:</p>
      <div className={styles.filterContainer}>
        <p>{setFilterFieldText(filter.type, filter[filter.type])} &#9660;</p>
        <ul className={styles.filtersList}>
          <li>
            <button className={styles.filterBtn} onClick={handleDateFilter}>
              {setFilterFieldText(filterTypes.DATE, !filter.date)}
            </button>
          </li>
          <li>
            <button
              className={styles.filterBtn}
              onClick={handleFrequencyFilter}
            >
              {setFilterFieldText(filterTypes.FREQUENCY, !filter.frequency)}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

function setFilterFieldText(type, isMinToMax) {
  switch (type) {
    case "date":
      return isMinToMax ? "new first" : "old first";
    case "frequency":
      return isMinToMax ? "most frequent" : "less frequent";
    default:
      return "";
  }
}

export default Filters;
