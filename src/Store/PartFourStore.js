import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partFourIsActive: false,
};
const partFour = createSlice({
  name: "partFour",
  initialState,
  reducers: {
    showPart(state) {
      state.partFourIsActive = true;
    },
    hidePart(state) {
      state.partFourIsActive = false;
    },
  },
});

export default partFour;
