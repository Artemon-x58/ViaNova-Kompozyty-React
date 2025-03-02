import { configureStore } from "@reduxjs/toolkit";
import { accessoriesReducer } from "./accessories/accessoriesSlice";
import { vatsReducer } from "./vats/vatsSlice";

export const store = configureStore({
  reducer: {
    vats: vatsReducer,
    accessories: accessoriesReducer,
  },
});
