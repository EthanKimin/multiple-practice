/* eslint-disable react/prop-types */
import "./RationalFraction.css";

/**
 * 유리수 표시 컴포넌트: (+2/3) 또는 (-3/4) 형태
 * @param {number} n - 분자 (음수 가능)
 * @param {number} d - 분모 (양수)
 */
export const RationalView = ({ n, d }) => {
  const isNeg = n < 0;
  return (
    <span className="rational rational--view">
      <span className="rational__paren">(</span>
      <span className={`rational__sign ${isNeg ? "rational__sign--neg" : "rational__sign--pos"}`}>
        {isNeg ? "−" : "+"}
      </span>
      <span className="rational__fraction">
        <span className="rational__numerator">{Math.abs(n)}</span>
        <span className="rational__line" />
        <span className="rational__denominator">{d}</span>
      </span>
      <span className="rational__paren">)</span>
    </span>
  );
};

/**
 * 유리수 입력 컴포넌트: 부호 토글 버튼 + 분자/분모 입력
 * @param {Object} value - { n: string (음수 가능), d: string }
 * @param {boolean|null} isCorrect - 정답 여부
 * @param {Function} onChange - 값 변경 핸들러
 */
export const RationalInput = ({ value, onChange, isCorrect }) => {
  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  const isNegative =
    typeof value?.n === "string" && value.n.startsWith("-");
  const absN = isNegative ? (value?.n ?? "").slice(1) : (value?.n ?? "");

  const toggleSign = () => {
    const newN = isNegative ? absN : `-${absN}`;
    onChange({ ...value, n: newN });
  };

  const handleNumerator = (e) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    onChange({ ...value, n: isNegative ? `-${digits}` : digits });
  };

  const handleDenominator = (e) => {
    onChange({ ...value, d: e.target.value.replace(/[^0-9]/g, "") });
  };

  return (
    <span className={`rational rational--input ${answerClass}`}>
      <button
        type="button"
        className={`rational__sign-btn ${isNegative ? "rational__sign-btn--neg" : "rational__sign-btn--pos"}`}
        onClick={toggleSign}
        aria-label="부호 변경"
      >
        {isNegative ? "−" : "+"}
      </button>
      <span className="rational__fraction">
        <input
          type="text"
          inputMode="numeric"
          className="rational__input"
          value={absN}
          onChange={handleNumerator}
          placeholder="분자"
          autoComplete="off"
          aria-label="분자"
        />
        <span className="rational__line" />
        <input
          type="text"
          inputMode="numeric"
          className="rational__input"
          value={value?.d ?? ""}
          onChange={handleDenominator}
          placeholder="분모"
          autoComplete="off"
          aria-label="분모"
        />
      </span>
    </span>
  );
};

export default RationalInput;
