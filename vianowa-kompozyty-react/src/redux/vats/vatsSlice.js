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
    addOption(state, action) {
      const { vatId, option } = action.payload;

      return state.map((vat) =>
        vat.id === vatId
          ? { ...vat, options: [...(vat.options || []), option] }
          : vat
      );
    },
  },
});

export const { addVat, removeVat, addOption } = vatsSlice.actions;
export const vatsReducer = vatsSlice.reducer;
