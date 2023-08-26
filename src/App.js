import React from "react";
import TestPart from "./Components/TestPart/TestPart";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import PartOne from "./Components/PartOne/PartOne";

function App() {
  const partOne = useSelector((state) => state.partOneIsActive);
  return (
    <React.Fragment>
      <Header />
      {partOne ? <PartOne /> : <TestPart />}
    </React.Fragment>
  );
}

export default App;
