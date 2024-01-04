"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/features/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
