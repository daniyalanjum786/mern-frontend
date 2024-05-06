import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = sampleSlice.actions;

export default sampleSlice.reducer;
