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
          ? {
              ...vat,
              options: [...(vat.options || []), option],
              price: vat.price + option.price,
            }
          : vat
      );
    },
    removeOption(state, action) {
      const { vatId, option } = action.payload;

      return state.map((vat) => ({
        ...vat,
        options: vat.options?.filter((opt) => opt.id !== vatId) ?? [],
        price: vat.price - option.price,
      }));
    },
  },
});

export const { addVat, removeVat, addOption, removeOption } = vatsSlice.actions;
export const vatsReducer = vatsSlice.reducer;
