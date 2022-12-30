import Dictionary from "../components/dictionary/Dictionary";
import Filters from "../components/filters/Filters";
import ErrorPopup from "../components/errorPopup/ErrorPopup";

import { useGetWordsQuery } from "../store/slices/api";

const Home = () => {
  const {
    data: dictionary = [],
    isFetching,
    error,
    isError,
  } = useGetWordsQuery();

  return (
    <section>
      {isError && <ErrorPopup {...error} />}
      <h2>Dictionary</h2>
      <Filters />
      <Dictionary words={dictionary} isFetching={isFetching} />
    </section>
  );
};

export default Home;
