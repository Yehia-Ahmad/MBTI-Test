import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const showParts = configureStore({
  reducer: partOne.reducer,
});

export const partOneActions = partOne.actions;

export default showParts;
