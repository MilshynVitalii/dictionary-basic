import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Word, Dictionary } from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/dictionary" }),
  tagTypes: ["Dictionary", "Word"],
  endpoints: (builder) => ({
    getWords: builder.query<Dictionary, void>({
      query: () => "/",
      providesTags: (result = []) => [
        "Dictionary",
        ...result.map(({ id }) => ({ type: "Dictionary" as const, id })),
      ],
    }),
    getWord: builder.query<Word, string>({
      query: (id) => `/${id}`,
      // eslint-disable-next-line
      providesTags: (result, error, arg) => [{ type: "Word", id: arg }],
    }),
    getWordByName: builder.query<Word[], string>({
      query: (name) => `?q=${name}`,
      keepUnusedDataFor: 0,
    }),
    removeWord: builder.mutation<Dictionary, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dictionary"],
    }),
    addWord: builder.mutation<Dictionary, Word>({
      query: (word) => ({
        url: `/`,
        method: "POST",
        body: word,
      }),
      invalidatesTags: ["Dictionary"],
    }),
    changeWord: builder.mutation<Dictionary, Word>({
      query: (word) => ({
        url: `/${word.id}`,
        method: "PATCH",
        body: word,
      }),
      // eslint-disable-next-line
      invalidatesTags: (result, error, arg) => [
        { type: "Word", id: arg.id },
        { type: "Dictionary", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetWordsQuery,
  useGetWordQuery,
  useGetWordByNameQuery,
  useRemoveWordMutation,
  useAddWordMutation,
  useChangeWordMutation,
} = api;
