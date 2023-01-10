export interface Word {
  id: string;
  word: string;
  translation: string;
  transcription: string;
  frequency: string;
  definition: string;
  synonyms: string;
  antonyms: string;
  examples: string;
  date: number;
}

export type Dictionary = Word[];
