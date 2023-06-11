import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
