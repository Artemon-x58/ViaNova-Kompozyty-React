import { configureStore } from "@reduxjs/toolkit";
import { accessoriesReducer } from "./accessories/accessoriesSlice";

export const store = configureStore({
  reducer: {
    accessories: accessoriesReducer,
  },
});
