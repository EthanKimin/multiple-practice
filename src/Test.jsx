import { useEffect, useState } from "react";
import "./Test.css";

// eslint-disable-next-line react/prop-types
const Test = ({ visible, maxNum, onAllCorrectChange }) => {
  const generateProblems = () => {
    const makeNum = () => Math.ceil(Math.random() * maxNum);
    return Array.from({ length: 10 }, (_, i) => {
      const a = makeNum();
      const b = makeNum();
      return {
        id: `answer${i + 1}`,
        a,
        b,
        correctAnswer: a * b,
        userAnswer: "",
        isCorrect: null,
      };
    });
  };

  const [problems, setProblems] = useState(generateProblems());

  const handleInputChange = (e, index) => {
    const newProblems = [...problems];
    const userValue = e.target.value;
    newProblems[index].userAnswer = userValue;

    if (/^\d+$/.test(userValue)) {
      newProblems[index].isCorrect =
        Number(userValue) === newProblems[index].correctAnswer;
    } else {
      newProblems[index].isCorrect = null;
    }

    setProblems(newProblems);
  };

  // ✅ 모든 문제 정답 여부 계산해서 부모에 전달
  useEffect(() => {
    if (!onAllCorrectChange) return;

    const allCorrect = problems.every((p) => p.isCorrect === true);

    onAllCorrectChange(allCorrect);
  }, [problems, onAllCorrectChange]);

  if (!visible) return null;

  return (
    <div className="body__content__test">
      <div className="test_1">
        {problems.map((problem, index) => (
          <div key={problem.id} className="problem">
            {problem.a} × {problem.b} ={" "}
            <input
              type="text"
              name={problem.id}
              id={problem.id}
              value={problem.userAnswer}
              onChange={(e) => handleInputChange(e, index)}
            />
            {problem.isCorrect === true && (
              <span style={{ color: "green", marginLeft: "8px" }}>정답!</span>
            )}
            {problem.isCorrect === false && (
              <span style={{ color: "red", marginLeft: "8px" }}>오답</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
