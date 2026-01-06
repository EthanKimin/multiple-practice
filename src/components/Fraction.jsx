/* eslint-disable react/prop-types */
import "./Fraction.css";

/**
 * 분수 표시 컴포넌트
 * @param {number} n - 분자
 * @param {number} d - 분모
 */
export const FractionView = ({ n, d }) => (
  <span className="fraction fraction--view">
    <span className="fraction__numerator">{n}</span>
    <span className="fraction__line"></span>
    <span className="fraction__denominator">{d}</span>
  </span>
);

/**
 * 분수 입력 컴포넌트
 * @param {Object} value - { n: 분자, d: 분모 }
 * @param {boolean|null} isCorrect - 정답 여부
 * @param {Function} onChange - 값 변경 핸들러
 */
export const FractionInput = ({ value, onChange, isCorrect }) => {
  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  const handleNumeratorChange = (e) => {
    onChange({ ...value, n: e.target.value });
  };

  const handleDenominatorChange = (e) => {
    onChange({ ...value, d: e.target.value });
  };

  return (
    <span className={`fraction fraction--input ${answerClass}`}>
      <input
        type="text"
        inputMode="numeric"
        className="fraction__numerator fraction__input"
        value={value?.n || ""}
        onChange={handleNumeratorChange}
        placeholder="분자"
        autoComplete="off"
        aria-label="분자"
      />
      <span className="fraction__line"></span>
      <input
        type="text"
        inputMode="numeric"
        className="fraction__denominator fraction__input"
        value={value?.d || ""}
        onChange={handleDenominatorChange}
        placeholder="분모"
        autoComplete="off"
        aria-label="분모"
      />
    </span>
  );
};

export default FractionInput;
