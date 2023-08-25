import React from "react";
import styles from "./PartOne.module.css";
const partone = [
  {
    name: "عندما تذهب الى مكان ما اثناء النهار هل تفضل",
    answers: ["ان نخطط لما ستفعله ومتى ستفعله ", "تذهب يدون تخطيط"],
  },
  {
    name: "هل تعتبر نفسك ",
    answers: ["شخصا عفويا ", "شخصا منظما"],
  },
];

const PartOne = () => {
  return (
    <div className={styles.questionContainer}>
      {partone.map((item, index) => {
        return (
          <div className={styles.questionItem}>
            <h1 key={index}>{item.name}</h1>
            <div className={styles.answer}>
              {item.answers.map((answer, indexAnswer) => {
                return (
                  <label key={indexAnswer}>
                    <input type="radio" />
                    {answer}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PartOne;
