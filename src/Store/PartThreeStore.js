import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partThreeIsActive: false,
};
const partThree = createSlice({
  name: "partThree",
  initialState,
  reducers: {
    showPart(state) {
      state.partThreeIsActive = true;
    },
    hidePart(state) {
      state.partThreeIsActive = false;
    },
  },
});

export default partThree;
