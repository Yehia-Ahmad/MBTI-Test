import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partTwoIsActive: false,
};

const partTwo = createSlice({
  name: "partTwo",
  initialState,
  reducers: {
    showPart(state) {
      state.partTwoIsActive = true;
    },
    hidePart(state) {
      state.partTwoIsActive = false;
    },
  },
});

export default partTwo;
