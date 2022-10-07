import { createSlice } from '@reduxjs/toolkit'

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: [
    {
      id: 1,
      en: 'Word1',
      ru: 'Слово1',
      transcription: 'wɜ:d1',
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples'
    },
    {
      id: 2,
      en: 'Word2',
      ru: 'Слово2',
      transcription: 'wɜ:d2',
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples'
    },
    {
      id: 3,
      en: 'Word3',
      ru: 'Слово3',
      transcription: 'wɜ:d3',
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples'
    },
    {
      id: 4,
      en: 'Word4',
      ru: 'Слово4',
      transcription: 'wɜ:d4',
      definition: 'Definition of the word',
      synonyms: 'synonyms, of, the, word',
      antonyms: 'antonyms, of, the, word',
      examples: 'array of sentences with the word usage examples'
    }
  ],
  reducers: {
    wordAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
      })
    },
  }
})

export const { wordAdded } = dictionarySlice.actions
export default dictionarySlice.reducer