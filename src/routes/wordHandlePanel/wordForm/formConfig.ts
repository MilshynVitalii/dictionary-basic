import * as Yup from "yup";

const formikConfig = {
  initialValues: {
    id: "",
    word: "",
    translation: "",
    transcription: "",
    definition: "",
    synonyms: "",
    antonyms: "",
    examples: "",
    frequency: "",
    date: NaN,
  },
  validationSchema: Yup.object({
    word: Yup.string()
      .trim()
      .lowercase()
      .max(15, "Must be 15 characters or less")
      .required("Field is required")
      .strict(),
    translation: Yup.string()
      .trim()
      .lowercase()
      .max(15, "Must be 15 characters or less")
      .required("Field is required")
      .strict(),
    transcription: Yup.string()
      .trim()
      .lowercase()
      .max(15, "Must be 15 characters or less")
      .strict(),
    definition: Yup.string()
      .trim()
      .lowercase()
      .min(15, "Must be 15 characters or more")
      .strict(),
    synonyms: Yup.string()
      .trim()
      .lowercase()
      .min(5, "Must be 5 characters or more")
      .strict(),
    antonyms: Yup.string()
      .trim()
      .lowercase()
      .min(5, "Must be 5 characters or more")
      .strict(),
    examples: Yup.string()
      .trim()
      .max(250, "Must be 250 characters or less")
      .strict(),
    frequency: Yup.number().positive().integer(),
  }),
};

const fieldsData = [
  { type: "text", name: "word", placeholder: "New word" },
  { type: "text", name: "translation", placeholder: "Translation" },
  {
    type: "text",
    name: "transcription",
    placeholder: "Transcription",
    optional: "transcription",
  },
  {
    type: "text",
    name: "definition",
    placeholder: "Definition",
    optional: "definition",
  },
  {
    type: "text",
    name: "synonyms",
    placeholder: "Synonyms",
    optional: "synonyms",
  },
  {
    type: "text",
    name: "antonyms",
    placeholder: "Antonyms",
    optional: "antonyms",
  },
  {
    type: "text",
    name: "examples",
    placeholder: "Examples",
    optional: "examples",
  },
  {
    type: "text",
    name: "frequency",
    placeholder: "Frequency",
    optional: "frequency",
  },
];

export { formikConfig, fieldsData };
