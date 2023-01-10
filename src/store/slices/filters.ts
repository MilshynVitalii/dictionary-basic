import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dictionary } from "../types";

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
    filteredBySearchInput(state, action: PayloadAction<string>) {
      state.type = filterTypes.SEARCH;
      state.search = action.payload;
    },
  },
});

const setFrequency = (number: number) => number || Number.MAX_SAFE_INTEGER;
export const filterDictionary = (
  dictionary: Dictionary,
  filter: string,
  metaData: string | boolean
) => {
  const arr = [...dictionary];

  switch (filter) {
    case filterTypes.DATE:
      return arr.sort((a, b) => (a.date - b.date) * (metaData ? -1 : 1));
    case filterTypes.FREQUENCY:
      return arr.sort(
        (a, b) =>
          (setFrequency(Number(a.frequency)) -
            setFrequency(Number(b.frequency))) *
          (metaData ? 1 : -1)
      );
    case filterTypes.SEARCH:
      return arr.filter(
        ({ word, translation }) =>
          word.startsWith(metaData as string) ||
          translation.startsWith(metaData as string)
      );
    default:
      return arr;
  }
};

export { filterTypes };
export const { filteredByDate, filteredByFrequency, filteredBySearchInput } =
  filtersSlice.actions;
export default filtersSlice.reducer;
