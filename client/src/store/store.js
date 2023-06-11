import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./CategorySlice/categorySlice";
export const store = configureStore({
  reducer: {
    categoryReducer,
  },
});
