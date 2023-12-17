import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/test.slice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
