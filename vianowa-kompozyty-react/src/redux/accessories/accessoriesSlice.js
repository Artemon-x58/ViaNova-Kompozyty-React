import { createSlice } from "@reduxjs/toolkit";

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState: [],
  reducers: {
    addAccessory(state, action) {
      return [...state, action.payload];
    },
    removeAccessory(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const accessoriesReducer = accessoriesSlice.reducer;
export const { addAccessory, removeAccessory } = accessoriesSlice.actions;
