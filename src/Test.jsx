import { useState, useEffect } from "react";
import Timer from "./Timer";
import "./Test.css";

/* 문제 생성 로직을 한 함수 안에서 처리 */
const generateProblems = (type, maxNum) => {
  const make = () => Math.ceil(Math.random() * maxNum);

  return Array.from({ length: 10 }, (_, i) => {
    let a, b, display, correct;

    if (type === "minus") {
      a = 10 + make();
      b = make();
      display = `${a} - ${b}`;
      correct = a - b;
    } else if (type === "multiple") {
      a = make();
      b = make();
      display = `${a} × ${b}`;
      correct = a * b;
    } else if (type === "plus") {
      a = make();
      b = make();
      display = `${a} + ${b}`;
      correct = a + b;
    }

    return {
      id: `q${i}`,
      display,
      correctAnswer: correct,
      userAnswer: "",
      isCorrect: null,
    };
  });
};

// eslint-disable-next-line react/prop-types
const Test = ({ title, type, maxNum = 9 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [allCorrect, setAllCorrect] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const [problems, setProblems] = useState(generateProblems(type, maxNum));

  /** 문제 입력 처리 */
  const handleInput = (e, idx) => {
    const arr = [...problems];
    const val = e.target.value;

    arr[idx].userAnswer = val;

    if (/^\d+$/.test(val)) {
      arr[idx].isCorrect = Number(val) === arr[idx].correctAnswer;
    } else arr[idx].isCorrect = null;

    setProblems(arr);
  };

  /** 모든 정답 체크 */
  useEffect(() => {
    setAllCorrect(problems.every((p) => p.isCorrect === true));
  }, [problems]);

  /** 시작/리셋 버튼 */
  const handleStartReset = () => {
    if (!isRunning) {
      // 시작
      setProblems(generateProblems(type, maxNum));
      setIsRunning(true);
      setVisible(true);
      setElapsed(0);
      setResetKey((k) => k + 1);
    } else {
      // 리셋
      setIsRunning(false);
      setElapsed(0);
      setAllCorrect(false);

      // 문제 & 타이머 리셋
      setResetKey((k) => k + 1);
      setProblems(generateProblems(type, maxNum));

      setIsRunning(true);
    }
  };

  /** 제출 버튼 */
  const handleSubmit = () => {
    setIsRunning(false);
    alert(`소요 시간: ${elapsed}초`);
  };

  return (
    <div className="body">
      <h1 className="body__title">{title}</h1>

      <div className="body__content">
        <button
          className="body__content__first__strtBtn"
          onClick={handleStartReset}
        >
          {isRunning ? "리셋" : "시작"}
        </button>

        <Timer key={resetKey} isRunning={isRunning} onTimeChange={setElapsed} />

        {visible && (
          <div className="test_1">
            {problems.map((p, i) => (
              <div key={p.id} className="problem">
                {p.display} ={" "}
                <input
                  value={p.userAnswer}
                  onChange={(e) => handleInput(e, i)}
                />
                {p.isCorrect === true && (
                  <span style={{ color: "green", marginLeft: "8px" }}>
                    정답!
                  </span>
                )}
                {p.isCorrect === false && (
                  <span style={{ color: "red", marginLeft: "8px" }}>오답</span>
                )}
              </div>
            ))}
          </div>
        )}

        {allCorrect && (
          <button className="body__content__submitBtn" onClick={handleSubmit}>
            제출
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
