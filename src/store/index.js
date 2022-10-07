import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './slices/dictionary';

export const store = configureStore({
  reducer: {
    words: dictionaryReducer
  }
})