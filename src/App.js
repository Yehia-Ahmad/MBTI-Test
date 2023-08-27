import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import PartOne from "./Components/PartOne/PartOne";
import PartTwo from "./Components/PartTwo/PartTwo";
import TestPart from "./Components/TestPart/TestPart";
import { partOneActions, partTwoActions } from "./Store/index";

function App() {
  const disPatch = useDispatch();
  const [showTestPart, setShowTestPart] = useState(true);
  const partOne = useSelector((state) => state.partOne.partOneIsActive);
  const partTwo = useSelector((state) => state.partTwo.partTwoIsActive);
  // const partFour = useSelector((state) => state.partFour.partFourIsActive);
  // const partThree = useSelector((state) => state.partThree.partThreeIsActive);

  const hidePartHandler = () => {
    setShowTestPart(false);
  };
  const showPartHandler = () => {
    setShowTestPart(true);
    if (partOne === true) {
      disPatch(partOneActions.hidePart());
    } else if (partTwo === true) {
      disPatch(partTwoActions.hidePart());
    }
  };

  return (
    <React.Fragment>
      <Header />
      {showTestPart && <TestPart hidePart={hidePartHandler} />}
      {partOne && <PartOne showPart={showPartHandler} />}
      {partTwo && <PartTwo showPart={showPartHandler} />}
    </React.Fragment>
  );
}

export default App;
