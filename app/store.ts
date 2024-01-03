import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/ui/sections/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
