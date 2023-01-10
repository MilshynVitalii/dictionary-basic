import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filters";
import { api } from "./slices/api";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
