/* eslint-disable react/prop-types */
import "./AlgebraInput.css";

/**
 * 대수식 표시 컴포넌트: 2x + 3 또는 -x - 5 형태
 * @param {number} coeff - x의 계수
 * @param {number} const_ - 상수항
 */
export const AlgebraView = ({ coeff, const: konst }) => {
  const coeffStr = coeff === 1 ? "" : coeff === -1 ? "-" : `${coeff}`;
  const constStr =
    konst > 0 ? `+ ${konst}` : konst < 0 ? `- ${Math.abs(konst)}` : "";

  return (
    <span className="algebra algebra--view">
      <span className="algebra__coeff">{coeffStr}x</span>
      {konst !== 0 && (
        <span className="algebra__const">{` ${constStr}`}</span>
      )}
    </span>
  );
};

/**
 * 대수식 입력 컴포넌트: [±][수]x [±][수] 형태
 * @param {Object}   value     - { coeff: string, const: string }  (부호 포함)
 * @param {boolean|null} isCorrect
 * @param {Function} onChange
 */
export const AlgebraInput = ({ value, isCorrect, onChange }) => {
  const answerClass =
    isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";

  // 계수 부호 처리
  const coeffNeg =
    typeof value?.coeff === "string" && value.coeff.startsWith("-");
  const coeffDigits = (value?.coeff ?? "").replace(/^[+-]/, "");

  // 상수 부호 처리
  const constNeg =
    typeof value?.const === "string" && value.const.startsWith("-");
  const constDigits = (value?.const ?? "").replace(/^[+-]/, "");

  const toggleCoeffSign = () => {
    const newVal = coeffNeg ? coeffDigits : `-${coeffDigits}`;
    onChange({ ...value, coeff: newVal });
  };

  const toggleConstSign = () => {
    const newVal = constNeg ? constDigits : `-${constDigits}`;
    onChange({ ...value, const: newVal });
  };

  const handleCoeffDigits = (e) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    onChange({ ...value, coeff: coeffNeg ? `-${digits}` : digits });
  };

  const handleConstDigits = (e) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    onChange({ ...value, const: constNeg ? `-${digits}` : digits });
  };

  return (
    <span className={`algebra algebra--input ${answerClass}`}>
      {/* 계수 입력 */}
      <button
        type="button"
        className={`algebra__sign-btn ${coeffNeg ? "algebra__sign-btn--neg" : "algebra__sign-btn--pos"}`}
        onClick={toggleCoeffSign}
        aria-label="계수 부호 변경"
      >
        {coeffNeg ? "−" : "+"}
      </button>
      <input
        type="text"
        inputMode="numeric"
        className="algebra__num-input"
        value={coeffDigits}
        onChange={handleCoeffDigits}
        placeholder="계수"
        autoComplete="off"
        aria-label="x의 계수"
      />
      <span className="algebra__var">x</span>

      {/* 상수 부호·입력 */}
      <button
        type="button"
        className={`algebra__sign-btn ${constNeg ? "algebra__sign-btn--neg" : "algebra__sign-btn--pos"}`}
        onClick={toggleConstSign}
        aria-label="상수 부호 변경"
      >
        {constNeg ? "−" : "+"}
      </button>
      <input
        type="text"
        inputMode="numeric"
        className="algebra__num-input"
        value={constDigits}
        onChange={handleConstDigits}
        placeholder="상수"
        autoComplete="off"
        aria-label="상수항"
      />
    </span>
  );
};

export default AlgebraInput;
