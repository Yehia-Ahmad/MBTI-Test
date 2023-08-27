import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partThreeIsActive: false,
};
const partThree = createSlice({
  name: "partThree",
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

export default partThree;
