import { createSlice } from "@reduxjs/toolkit";

const vatsSlice = createSlice({
  name: "vats",
  initialState: [],
  reducers: {
    addVat(state, action) {
      return [...state, action.payload];
    },
    removeVat(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const vatsReducer = vatsSlice.reducer;
export const { addVat, removeVat } = vatsSlice.actions;
