import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partFourIsActive: false,
};
const partFour = createSlice({
  name: "partFour",
  initialState,
  reducers: {
    showPart(state) {
      state.partOneIsActive = true;
    },
    hidePart(state) {
      state.partOneIsActive = false;
    },
  },
});

export default partFour;
