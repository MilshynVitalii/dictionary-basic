import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/dictionary' }),
  tagTypes: ['Dictionary'],
  endpoints: (builder) => ({
    getWords: builder.query({
      query: () => '/',
      providesTags: (result = [], error, arg) => [
        'Dictionary',
        ...result.map(({ id }) => ({ type: 'Word', id })),
      ],
    }),
    getWord: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Word', id: arg }],
    }),
    getWordByName: builder.query({
      query: (name) => `?q=${name}`,
      keepUnusedDataFor: 0,
    }),
    removeWord: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Dictionary'],
    }),
    addWord: builder.mutation({
      query: (word) => ({
        url: `/`,
        method: 'POST',
        body: word,
      }),
      invalidatesTags: ['Dictionary'],
    }),
    changeWord: builder.mutation({
      query: (word) => ({
        url: `/${word.id}`,
        method: 'PATCH',
        body: word,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Word', id: arg.id }],
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
