import { configureStore } from "@reduxjs/toolkit";
import PartOneStore from "./PartOneStore";
import PartTwoStore from "./PartTwoStore";
import PartThreeStore from "./PartThreeStore";
import PartFourStore from "./PartFourStore";

const showParts = configureStore({
  reducer: {
    partOne: PartOneStore.reducer,
    partTwo: PartTwoStore.reducer,
    partFour: PartFourStore.reducer,
    partThree: PartThreeStore.reducer,
  },
});

export const partOneActions = PartOneStore.actions;
export const partTwoActions = PartTwoStore.actions;
export const partThreeActions = PartThreeStore.actions;
export const partFourActions = PartFourStore.actions;

export default showParts;
