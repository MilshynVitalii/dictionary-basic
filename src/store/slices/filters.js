import { createSlice } from "@reduxjs/toolkit";

const filterTypes = {
  DATE: "date",
  FREQUENCY: "frequency",
  SEARCH: "search",
};

const filtersSlice = createSlice({
  name: "dictionary",
  initialState: {
    type: filterTypes.DATE,
    date: true,
    frequency: true,
    search: "",
  },
  reducers: {
    filteredByDate(state) {
      state.type = filterTypes.DATE;
      state.date = !state.date;
    },
    filteredByFrequency(state) {
      state.type = filterTypes.FREQUENCY;
      state.frequency = !state.frequency;
    },
    filteredBySearchInput(state, action) {
      state.type = filterTypes.SEARCH;
      state.search = action.payload;
    },
  },
});

const setFrequency = (number) => number || Number.MAX_SAFE_INTEGER;
export const filterDictionary = (dictionary, filter, filterMeta) => {
  const arr = [...dictionary];

  switch (filter) {
    case filterTypes.DATE:
      return arr.sort(
        (a, b) => (a[filter] - b[filter]) * (filterMeta ? -1 : 1)
      );
    case filterTypes.FREQUENCY:
      return arr.sort(
        (a, b) =>
          (setFrequency(a[filter]) - setFrequency(b[filter])) *
          (filterMeta ? 1 : -1)
      );
    case filterTypes.SEARCH:
      return arr.filter(
        ({ word, translation }) =>
          word.startsWith(filterMeta) || translation.startsWith(filterMeta)
      );
    default:
      return arr;
  }
};

export { filterTypes };
export const { filteredByDate, filteredByFrequency, filteredBySearchInput } =
  filtersSlice.actions;
export default filtersSlice.reducer;
