/* eslint-disable react/prop-types */

import FractionInput from "./FractionInput";
import FractionView from "./FractionView";

const ProblemRow = ({ problem, type, onAnswerChange }) => {
  const { display, userAnswer, isCorrect } = problem;

  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  return (
    <div className="problem">
      {type === "fractionPlusSimple" ? (
        <>
          <FractionView {...display.a} />
          <span>{display.op}</span>
          <FractionView {...display.b} />
          {" = "}
          <FractionInput
            value={userAnswer}
            isCorrect={isCorrect}
            onChange={onAnswerChange}
          />
        </>
      ) : (
        <>
          {display} ={" "}
          <input
            className={`answer ${answerClass}`}
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default ProblemRow;
