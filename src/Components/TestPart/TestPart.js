import React from "react";
import styles from "./TestPart.module.css";
import {
  partFourActions,
  partOneActions,
  partThreeActions,
  partTwoActions,
} from "../../Store/index";
import { useDispatch } from "react-redux";

const TestPart = (props) => {
  const dispatch = useDispatch();
  const showPartOneHandler = () => {
    props.hidePart();
    dispatch(partOneActions.showPart());
  };
  const showPartTwoHandler = () => {
    props.hidePart();
    dispatch(partTwoActions.showPart());
  };
  const showPartThreeHandler = () => {
    props.hidePart();
    dispatch(partThreeActions.showPart());
  };
  const showPartFourHandler = () => {
    props.hidePart();
    dispatch(partFourActions.showPart());
  };

  return (
    <div className={styles.Container}>
      <div className={styles.PartContainer} onClick={showPartOneHandler}>
        <h1>Part One</h1>
        <p>أى الاجابات التالبه أقرب ما يكون لوصف ما تشعر يه او تقوم به عادة؟</p>
      </div>
      <div className={styles.PartContainer} onClick={showPartTwoHandler}>
        <h1>Part Two</h1>
        <p>أى كلمه من كل زوج من الكلمات التاليه تعجبك اكثر؟</p>
      </div>
      <div className={styles.PartContainer} onClick={showPartThreeHandler}>
        <h1>Part Three</h1>
        <p>أى الاجابات التالبه أقرب ما يكون لوصف ما تشعر يه او تقوم به عادة؟</p>
      </div>
      <div className={styles.PartContainer} onClick={showPartFourHandler}>
        <h1>Part Four</h1>
        <p>أى كلمه من كل زوج من الكلمات التاليه تعجبك اكثر؟</p>
      </div>
    </div>
  );
};

export default TestPart;
