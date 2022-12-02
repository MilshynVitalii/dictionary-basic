import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './slices/dictionary';
import filtersReducer from './slices/filters';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    filters: filtersReducer
  }
})