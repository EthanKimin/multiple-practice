/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Timer from "./Timer";
import "./TestComponent.css";
import { generateProblems, isSameFraction } from "../utils/problemGenerator";
import ProblemRow from "./ProblemRow";

/* =======================
   Main Component
======================= */

// eslint-disable-next-line react/prop-types
export const BasicAndDecimalTest = ({ title, type, maxNum = 9 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [allCorrect, setAllCorrect] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [problems, setProblems] = useState(generateProblems(type, maxNum));

  /** 일반 숫자 입력 처리 */
  const handleInput = (idx, val) => {
    const arr = [...problems];
    arr[idx].userAnswer = val; // 문자열 그대로 저장

    const correctNum = arr[idx].correctAnswer;
    if (/^\d*\.?\d*$/.test(val) && val !== "" && val !== ".") {
      arr[idx].isCorrect = Math.abs(parseFloat(val) - correctNum) < 0.0001;
    } else {
      arr[idx].isCorrect = null;
    }
    setProblems(arr);
  };

  /** 분수 입력 처리 */
  const handleFractionInput = (idx, val) => {
    const arr = [...problems];
    arr[idx].userAnswer = val; // n, d 모두 문자열

    const n = parseInt(val.n, 10);
    const d = parseInt(val.d, 10);

    if (!isNaN(n) && !isNaN(d) && d !== 0) {
      arr[idx].isCorrect = isSameFraction({ n, d }, arr[idx].correctAnswer);
    } else {
      arr[idx].isCorrect = null;
    }

    setProblems(arr);
  };

  /** 모든 정답 체크 */
  useEffect(() => {
    setAllCorrect(problems.every((p) => p.isCorrect === true));
  }, [problems]);

  /** 시작 / 리셋 */
  const handleStartReset = () => {
    setProblems(generateProblems(type, maxNum));
    setIsRunning(true);
    setVisible(true);
    setElapsed(0);
    setResetKey((k) => k + 1);
    setAllCorrect(false);
  };

  /** 제출 */
  const handleSubmit = () => {
    setIsRunning(false);
    alert(`소요 시간: ${elapsed}초`);
  };

  return (
    <div className="test">
      <h3 className="test__title">{title}</h3>

      <div className="test__content">
        <div className="test__content__first">
          <button
            className="test__content__first__strtBtn"
            onClick={handleStartReset}
          >
            {isRunning ? "리셋" : "시작"}
          </button>

          <Timer
            key={resetKey}
            isRunning={isRunning}
            onTimeChange={setElapsed}
            className="test__content__first__timer"
          />
        </div>

        {visible && (
          <div className="test_1">
            {problems.map((p, i) => (
              <ProblemRow
                key={p.id}
                problem={p}
                type={type}
                onAnswerChange={(val) =>
                  type === "fractionPlusSimple"
                    ? handleFractionInput(i, val)
                    : handleInput(i, val)
                }
              />
            ))}
          </div>
        )}

        {allCorrect && (
          <button className="test__content__submitBtn" onClick={handleSubmit}>
            제출
          </button>
        )}
      </div>
    </div>
  );
};
