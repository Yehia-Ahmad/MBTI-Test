import React, { useState } from "react";
import styles from "./PartOne.module.css";
import partone from "./PartOneObject";

const PartOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= partone.length) {
      newIndex = partone.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <div
          className={styles.inner}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
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
      </div>
      <div>
        <button
          className={styles.buttonArrow}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button
          className={styles.buttonArrow}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default PartOne;
