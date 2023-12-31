import React, { useState } from "react";
import styles from "../PartTwo/partTwo.module.css";
import partFour from "./PartFourObject";
import {
  EAnswer,
  FAnswer,
  IAnswer,
  JAnswer,
  NAnswer,
  PAnswer,
  SAnswer,
  TAnswer,
} from "../../AnswerObject";

let finalAnswer = []; //the final array with all Answers

const PartFour = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tempAnswer = [];

  //Handel Slider
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= partFour.length) {
      newIndex = partFour.length - 1;
    }

    setActiveIndex(newIndex);
  };

  //add the final answer to finalAnswer Array
  const pushAnswer = () => {
    if (tempAnswer.length > 0) {
      finalAnswer.push(tempAnswer[tempAnswer.length - 1]);
      // console.log(finalAnswer);
      // console.log(finalAnswer.length);
    }
  };

  const submitAnswer = () => {
    const answer = [];
    //submit PAnswer
    PAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          PAnswer.value = PAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit JAnswer
    JAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          JAnswer.value = JAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit FAnswer
    FAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          FAnswer.value = FAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit TAnswer
    TAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          TAnswer.value = TAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit NAnswer
    NAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          NAnswer.value = NAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit SAnswer
    SAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          SAnswer.value = SAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit IAnswer
    IAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          IAnswer.value = IAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });

    //submit EAnswer
    EAnswer.Answers.map((item) => {
      finalAnswer.map((ans) => {
        if (ans === item) {
          EAnswer.value = EAnswer.value + 1;
          answer.push(ans);
        }
        return "";
      });
      return "";
    });
    const value = [
      PAnswer.value,
      JAnswer.value,
      FAnswer.value,
      TAnswer.value,
      NAnswer.value,
      SAnswer.value,
      IAnswer.value,
      EAnswer.value,
    ];
    console.log(answer);
    console.log(value);
  };

  //Handel submit button add clear the array from duplicate element
  const submitHandler = () => {
    finalAnswer = [...new Set(finalAnswer)];
    submitAnswer();
    // return console.log(finalAnswer);
  };

  //Remove the other answer to same question
  const onClickHandler = (e) => {
    const el = e.target.id;
    const elName = e.target.value;
    // console.log(elName);

    let wrongAnswerArr = [];
    partFour.map((item) => {
      if (item.name === el) {
        wrongAnswerArr = item.answers.filter((e) => e !== elName);
      }
      return "";
    });
    const wrongAnswerVal = wrongAnswerArr[0];
    // console.log(wrongAnswerVal);
    if (finalAnswer.includes(wrongAnswerVal)) {
      finalAnswer = finalAnswer.filter((e) => e !== wrongAnswerVal);
      // console.log(finalAnswer);
    }
  };

  //add the answer to temp Array to add this value to finalAnswer array in pushAnswer function
  const onChangeHandler = (e) => {
    tempAnswer.push(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.questionContainer}>
          <div
            className={styles.inner}
            style={{ transform: `translate(-${activeIndex * (100 + 0.8)}%)` }}
          >
            {partFour.map((item, index) => {
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
                            id={item.name}
                            value={answer}
                            key={indexAnswer}
                            onClick={onClickHandler}
                            onChange={onChangeHandler}
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
              pushAnswer();
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>

          <button
            className={styles.buttonArrow}
            onClick={() => {
              updateIndex(activeIndex + 1);
              pushAnswer();
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
          <button
            className={styles.submitButton}
            onClick={() => {
              submitHandler();
              props.showPart();
            }}
          >
            Submit Answer
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartFour;
