// eslint-disable-next-line react/prop-types
const FractionInput = ({ value, onChange, isCorrect }) => {
  const getAnswerClass = (isCorrect) =>
    `answer ${
      isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : ""
    }`;
  // eslint-disable-next-line no-undef
  const cls = getAnswerClass(isCorrect);

  return (
    <span className="fraction">
      <input
        className={`fraction__top ${cls}`}
        // eslint-disable-next-line react/prop-types
        value={value.n}
        onChange={(e) => onChange({ ...value, n: e.target.value })}
      />
      <span className="fraction__bar" />
      <input
        className={`fraction__bottom ${cls}`}
        // eslint-disable-next-line react/prop-types
        value={value.d}
        onChange={(e) => onChange({ ...value, d: e.target.value })}
      />
    </span>
  );
};

export default FractionInput;
