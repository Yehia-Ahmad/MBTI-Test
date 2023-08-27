import React, { useRef, useState } from "react";
import styles from "../../Styles/styles.module.css";
import partone from "./PartOneObject";

const PartOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const radioButtonRef = useRef([]);
  radioButtonRef.current = [];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= partone.length) {
      newIndex = partone.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const submitHandler = () => {
    console.log(radioButtonRef.current);
  };

  const addToRef = (el) => {
    if (el && !radioButtonRef.current.includes(el)) {
      radioButtonRef.current.push(el);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.questionContainer}>
          <div
            className={styles.inner}
            style={{ transform: `translate(-${activeIndex * (100 + 0.45)}%)` }}
          >
            {partone.map((item, index) => {
              return (
                <div className={styles.questionItem}>
                  <h1 key={index}>{item.name}</h1>
                  <div className={styles.answer}>
                    {item.answers.map((answer, indexAnswer) => {
                      return (
                        <label key={answer}>
                          {answer}
                          <input
                            type="radio"
                            name="answer"
                            key={indexAnswer}
                            ref={addToRef}
                            id={answer}
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
          <button className={styles.submitButton} onClick={submitHandler}>
            Submit Answer
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartOne;
