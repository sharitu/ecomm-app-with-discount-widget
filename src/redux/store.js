
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { __http } from "../common/utils";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: __http, // Pass your Axios instance as an extra argument
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;