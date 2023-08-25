import React from "react";
import styles from "./TestPart.module.css";
import { partOneActions } from "../../Store/index";
import { useDispatch } from "react-redux";

const TestPart = () => {
  const dispatch = useDispatch();
  const showPartHandler = () => {
    dispatch(partOneActions.showPart());
  };
  return (
    <div className={styles.Container}>
      <div className={styles.PartContainer} onClick={showPartHandler}>
        <h1>Part One</h1>
        <p>أى الاجابات التالبه أقرب ما يكون لوصف ما تشعر يه او تقوم به عادة؟</p>
      </div>
      <div className={styles.PartContainer}>
        <h1>Part Two</h1>
        <p>أى كلمه من كل زوج من الكلمات التاليه تعجبك اكثر؟</p>
      </div>
      <div className={styles.PartContainer}>
        <h1>Part Three</h1>
        <p>أى الاجابات التالبه أقرب ما يكون لوصف ما تشعر يه او تقوم به عادة؟</p>
      </div>
      <div className={styles.PartContainer}>
        <h1>Part Four</h1>
        <p>أى كلمه من كل زوج من الكلمات التاليه تعجبك اكثر؟</p>
      </div>
    </div>
  );
};

export default TestPart;
