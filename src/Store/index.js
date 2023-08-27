import { configureStore } from "@reduxjs/toolkit";
import PartOneStore from "./PartOneStore";
import PartTwoStore from "./PartTwoStore";

const showParts = configureStore({
  reducer: {
    partOne: PartOneStore.reducer,
    partTwo: PartTwoStore.reducer,
  },
});

export const partOneActions = PartOneStore.actions;
export const partTwoActions = PartTwoStore.actions;

export default showParts;
