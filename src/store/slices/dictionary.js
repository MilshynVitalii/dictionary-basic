import { createSlice, nanoid } from '@reduxjs/toolkit';
import { filterTypes } from './filters';

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: [
    {
      id: nanoid(),
      word: 'word1',
      translation: 'слово1',
      transcription: 'wɜ:d1',
      frequency: 23,
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples',
      date: Date.now()
    },
    {
      id: nanoid(),
      word: 'word2',
      translation: 'слово2',
      transcription: 'wɜ:d2',
      frequency: 923,
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples',
      date: Date.now() - 1
    },
    {
      id: nanoid(),
      word: 'word3',
      translation: 'слово3',
      transcription: 'wɜ:d3',
      frequency: 2123,
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples',
      date: Date.now() - 2
    },
    {
      id: nanoid(),
      word: 'word4',
      translation: 'слово4',
      transcription: 'wɜ:d4',
      frequency: 1232,
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples',
      date: Date.now() - 3
    }
  ],
  reducers: {
    wordAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            date: Date.now(),
            ...data,
          }
        }
      }
    },
    wordChanged(state, action) {
      let word = state.find(word => action.payload.id === word.id);
      Object.assign(word, action.payload);
    },
    wordRemoved(state, action) {
      const ind = state.findIndex(word => action.payload === word.id);
      if(~ind) state.splice(ind, 1);
    }
  }
})

const setFrequency = (number) => number || Number.MAX_SAFE_INTEGER;

export const selectWordById = (state, id) => state.dictionary.find(word => word.id === id);
export const filteredDictionary = (state) => {
  const filter = state.filters.type;
  const filterMeta = state.filters[filter];
  const arr = [...state.dictionary];
  
  switch(filter) {
    case filterTypes.DATE:
      return arr.sort((a, b) => (a[filter] - b[filter]) * (filterMeta ? -1 : 1));
    case filterTypes.FREQUENCY:
      return arr.sort((a, b) => (setFrequency(a[filter]) - setFrequency(b[filter])) * (filterMeta ? 1 : -1));
    case filterTypes.SEARCH:
      return arr.filter(({word, translation}) => (word.startsWith(filterMeta) || translation.startsWith(filterMeta)));
    default:
      return arr;
  }
}
        
export const { wordAdded, wordChanged, wordRemoved } = dictionarySlice.actions;
export default dictionarySlice.reducer;

