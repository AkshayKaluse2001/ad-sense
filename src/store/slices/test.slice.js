import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = testSlice.actions;

export default testSlice.reducer;
