import * as Yup from 'yup';

const formikConfig = {
  initialValues: {
    word: '',
    translation: '',
    transcription: '',
    definition: '',
    synonyms: '',
    antonyms: '',
    examples: '',
    frequency: ''
  },
  validationSchema: Yup.object({
    word: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Field is required'),
    translation: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Field is required'),
    transcription: Yup.string()
      .max(15, 'Must be 15 characters or less'),
    definition: Yup.string()
      .min(15, 'Must be 15 characters or more'),
    synonyms: Yup.string()
      .min(5, 'Must be 5 characters or more'),
    antonyms: Yup.string()
      .min(5, 'Must be 5 characters or more'),
    examples: Yup.string()
    .max(250, 'Must be 250 characters or less'),
    frequency: Yup.number().positive().integer()
  })
};

const fieldsData = [
  {type: 'text', name: 'word', placeholder: 'New word'},
  {type: 'text', name: 'translation', placeholder: 'Translation'},
  {type: 'text', name: 'transcription', placeholder: 'Transcription', optional: 'transcription'},
  {type: 'text', name: 'definition', placeholder: 'Definition', optional: 'definition'},
  {type: 'text', name: 'synonyms', placeholder: 'Synonyms', optional: 'synonyms'},
  {type: 'text', name: 'antonyms', placeholder: 'Antonyms', optional: 'antonyms'},
  {type: 'text', name: 'examples', placeholder: 'Examples', optional: 'examples'},
  {type: 'text', name: 'frequency', placeholder: 'Frequency', optional: 'frequency'},
]

export { formikConfig, fieldsData };