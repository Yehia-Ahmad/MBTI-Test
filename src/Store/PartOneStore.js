import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partOneIsActive: false,
};
const partOne = createSlice({
  name: "partOne",
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

export default partOne;
