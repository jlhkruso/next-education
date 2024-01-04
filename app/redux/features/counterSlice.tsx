"use client";
import { createSlice } from "@reduxjs/toolkit";

// state
const initialState = {
  value: 5,
};

// actions
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// export actions
export const { increment, decrement } = counterSlice.actions;

// reducer, store needs that
export default counterSlice.reducer;
