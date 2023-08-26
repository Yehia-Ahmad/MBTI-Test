import React from "react";
import styles from "./PartOne.module.css";
import partone from "./PartOneObject";

const PartOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        {partone.map((item, index) => {
          return (
            <div className={styles.questionItem}>
              <h1 key={index}>{item.name}</h1>
              <div className={styles.answer}>
                {item.answers.map((answer, indexAnswer) => {
                  return (
                    <label key={indexAnswer}>
                      {answer}
                      <input
                        type="radio"
                        id={answer}
                        name="drone"
                        value={answer}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default PartOne;
