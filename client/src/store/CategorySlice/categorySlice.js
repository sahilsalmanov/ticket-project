import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categories: [],
  events: [],
  favorites: [],
};
export const getAllCategories = createAsyncThunk("category", async () => {
  const { data } = await axios.get("http://localhost:3000/api/category");
  return data;
});
export const getAllEvents = createAsyncThunk("events", async () => {
  const { data } = await axios.get("http://localhost:3000/api/events");
  return data;
});
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      const obj = state.events.find((q) => q._id == payload);

      state.favorites = [...state.favorites, obj];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
    builder.addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
    });
  },
});

export const categoryReducer = categorySlice.reducer;
export const { addToFavorites } = categorySlice.actions;
