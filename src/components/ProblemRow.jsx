/* eslint-disable react/prop-types */
import { FractionView, FractionInput } from "./Fraction";
import { isFractionType, isGeometryType } from "../utils/problemGenerator";
import "./ProblemRow.css";

/**
 * 문제 한 줄을 렌더링하는 컴포넌트
 * @param {Object} problem - 문제 객체
 * @param {string} type - 문제 유형
 * @param {Function} onAnswerChange - 답안 변경 핸들러
 */
const ProblemRow = ({ problem, type, onAnswerChange }) => {
  const { display, userAnswer, isCorrect } = problem;

  // 정답 여부에 따른 클래스명
  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  // 분수 문제
  if (isFractionType(type)) {
    return (
      <div className="problem problem--fraction">
        <div className="problem__equation">
          <FractionView {...display.a} />
          <span className="problem__operator">{display.op}</span>
          <FractionView {...display.b} />
          <span className="problem__equals">=</span>
          <FractionInput
            value={userAnswer}
            isCorrect={isCorrect}
            onChange={onAnswerChange}
          />
        </div>
      </div>
    );
  }

  // 도형 문제 (질문 텍스트 + 답 입력 2줄 레이아웃)
  if (isGeometryType(type)) {
    return (
      <div className="problem problem--geometry">
        <p className="problem__question">{display}</p>
        <div className="problem__answer-row">
          <span className="problem__equals">=</span>
          <input
            type="text"
            inputMode="numeric"
            className={`problem__input ${answerClass}`}
            value={userAnswer || ""}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="답"
            autoComplete="off"
            aria-label="답안 입력"
          />
          {isCorrect === true && (
            <span className="problem__feedback problem__feedback--correct" aria-label="정답">✓</span>
          )}
          {isCorrect === false && (
            <span className="problem__feedback problem__feedback--incorrect" aria-label="오답">✗</span>
          )}
        </div>
      </div>
    );
  }

  // 일반 문제 (덧셈, 뺄셈, 곱셈, 나눗셈, 소수)
  return (
    <div className="problem problem--basic">
      <div className="problem__equation">
        <span className="problem__display">{display}</span>
        <span className="problem__equals">=</span>
        <input
          type="text"
          inputMode="decimal"
          className={`problem__input ${answerClass}`}
          value={userAnswer || ""}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="답"
          autoComplete="off"
          aria-label="답안 입력"
        />
      </div>
      {isCorrect === true && (
        <span
          className="problem__feedback problem__feedback--correct"
          aria-label="정답"
        >
          ✓
        </span>
      )}
      {isCorrect === false && (
        <span
          className="problem__feedback problem__feedback--incorrect"
          aria-label="오답"
        >
          ✗
        </span>
      )}
    </div>
  );
};

export default ProblemRow;
