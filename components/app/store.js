import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { loadUsersStore, saveUsersStore } from "./Middleware/localStore";
import usersReducer from "../features/users/users";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    store: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, saveUsersStore),
  devTools: true,
});
loadUsersStore(store.dispatch);
