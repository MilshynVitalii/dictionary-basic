import { createSlice } from '@reduxjs/toolkit';

const filterTypes = {
  DATE: 'date',
  FREQUENCY: 'frequency',
  SEARCH: 'search'
}

const filtersSlice = createSlice({
  name: 'dictionary',
  initialState: {
    type: filterTypes.DATE, 
    date: true, 
    frequency: true,
    search: ''
  },
  reducers: {
    filteredByDate(state) {
      state.type = filterTypes.DATE;
      state.date =  !state.date;
    },
    filteredByFrequency(state) {
      state.type = filterTypes.FREQUENCY;
      state.frequency =  !state.frequency;
    },
    filteredBySearchInput(state, action) {
      state.type = filterTypes.SEARCH;
      state.search = action.payload;
    }
  }
});

export {filterTypes};
export const { filteredByDate, filteredByFrequency, filteredBySearchInput } = filtersSlice.actions
export default filtersSlice.reducer