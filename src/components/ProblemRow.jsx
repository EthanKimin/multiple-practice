/* eslint-disable react/prop-types */
import { FractionView, FractionInput } from "./Fraction";
import { RationalView, RationalInput } from "./RationalFraction";
import { AlgebraInput } from "./AlgebraInput";
import { isFractionType, isGeometryType, isIntegerType, isRationalType, isAlgebraType, isStatisticsType } from "../utils/problemGenerator";
import "./ProblemRow.css";

/**
 * 문제 한 줄을 렌더링하는 컴포넌트
 * @param {Object} problem - 문제 객체
 * @param {string} type - 문제 유형
 * @param {Function} onAnswerChange - 답안 변경 핸들러
 */
const IntegerInput = ({ userAnswer, isCorrect, onAnswerChange }) => {
  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  // userAnswer가 "-"로 시작하면 음수, 아니면 양수 부호
  const isNegative = typeof userAnswer === "string" && userAnswer.startsWith("-");
  const digits = typeof userAnswer === "string"
    ? userAnswer.replace(/^[+-]/, "")
    : "";

  const toggleSign = () => {
    const newSign = isNegative ? "+" : "-";
    onAnswerChange(digits !== "" ? `${newSign}${digits}` : newSign);
  };

  const handleDigits = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, ""); // 숫자만
    const sign = isNegative ? "-" : "+";
    onAnswerChange(val !== "" ? `${sign}${val}` : "");
  };

  return (
    <div className="problem__integer-input">
      <button
        type="button"
        className={`problem__sign-btn ${isNegative ? "problem__sign-btn--negative" : "problem__sign-btn--positive"}`}
        onClick={toggleSign}
        aria-label="부호 변경"
      >
        {isNegative ? "−" : "+"}
      </button>
      <input
        type="text"
        inputMode="numeric"
        className={`problem__input ${answerClass}`}
        value={digits}
        onChange={handleDigits}
        placeholder="숫자"
        autoComplete="off"
        aria-label="답안 입력"
      />
    </div>
  );
};

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

  // 유리수 문제 ((±분자/분모) 형태 표시 + 부호 토글 분수 입력)
  if (isRationalType(type)) {
    return (
      <div className="problem problem--fraction">
        <div className="problem__equation">
          <RationalView {...display.a} />
          <span className="problem__operator">{display.op}</span>
          <RationalView {...display.b} />
          <span className="problem__equals">=</span>
          <RationalInput
            value={userAnswer}
            isCorrect={isCorrect}
            onChange={onAnswerChange}
          />
        </div>
      </div>
    );
  }

  // 대수식(분배법칙) 문제: 식 텍스트 표시 + [±계수]x [±상수] 입력
  if (isAlgebraType(type)) {
    return (
      <div className="problem problem--algebra">
        <p className="problem__question">{display} =</p>
        <div className="problem__answer-row">
          <AlgebraInput
            value={userAnswer}
            isCorrect={isCorrect}
            onChange={onAnswerChange}
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

  // 정수 문제 (부호 토글 버튼 + 숫자 입력)
  if (isIntegerType(type)) {
    return (
      <div className="problem problem--basic">
        <div className="problem__equation">
          <span className="problem__display">{display}</span>
          <span className="problem__equals">=</span>
          <IntegerInput
            userAnswer={userAnswer}
            isCorrect={isCorrect}
            onAnswerChange={onAnswerChange}
          />
        </div>
        {isCorrect === true && (
          <span className="problem__feedback problem__feedback--correct" aria-label="정답">✓</span>
        )}
        {isCorrect === false && (
          <span className="problem__feedback problem__feedback--incorrect" aria-label="오답">✗</span>
        )}
      </div>
    );
  }

  // 통계 문제 (데이터 + 질문 텍스트 + 소수 입력)
  if (isStatisticsType(type)) {
    const [dataLine, questionLine] = display.split("\n");
    return (
      <div className="problem problem--geometry">
        <p className="problem__data">{dataLine}</p>
        <div className="problem__answer-row">
          <span className="problem__question-inline">{questionLine}</span>
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
