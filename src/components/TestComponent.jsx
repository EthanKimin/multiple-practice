import { useState, useEffect } from "react";
import Timer from "./Timer";
import "./shared-test-style.css";

/* 문제 생성 로직을 한 함수 안에서 처리 */
const generateProblems = (type, maxNum) => {
  const make = () => Math.ceil(Math.random() * maxNum);

  // 연산별 로직 정의 (표시 방식, 실제 정답 계산)
  const ops = {
    plus: () => {
      const a = make(),
        b = make();
      return { display: `${a} + ${b}`, correct: a + b };
    },
    minus: () => {
      const a = 10 + make(),
        b = make();
      return { display: `${a} - ${b}`, correct: a - b };
    },
    multiple: () => {
      const a = make(),
        b = make();
      return { display: `${a} × ${b}`, correct: a * b };
    },
    division: () => {
      const a = make(),
        b = make();
      return { display: `${a * b} ÷ ${b}`, correct: a };
    },
    decimalFirstPlus: () => {
      const a = make() / 10,
        b = make() / 10;
      return {
        display: `${a.toFixed(1)} + ${b.toFixed(1)}`,
        correct: parseFloat((a + b).toFixed(1)),
      };
    },
    decimalFirstMinus: () => {
      const a = make() / 10,
        b = make() / 10;
      const sum = parseFloat((a + b).toFixed(1));
      return {
        display: `${sum.toFixed(1)} - ${b.toFixed(1)}`,
        correct: parseFloat(a.toFixed(1)),
      };
    },
    decimalSecondPlus: () => {
      const a = make() / 100,
        b = make() / 100;
      return {
        display: `${a.toFixed(2)} + ${b.toFixed(2)}`,
        correct: parseFloat((a + b).toFixed(2)),
      };
    },
    decimalSecondMinus: () => {
      const a = make() / 100,
        b = make() / 100;
      const sum = parseFloat((a + b).toFixed(2));
      return {
        display: `${sum.toFixed(2)} - ${b.toFixed(2)}`,
        correct: parseFloat(a.toFixed(2)),
      };
    },
  };

  return Array.from({ length: 10 }, (_, i) => {
    // 정의된 연산 실행, 없으면 기본값(더하기) 처리
    const { display, correct } = (ops[type] || ops.plus)();

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
const TestComponent = ({ title, type, maxNum = 9 }) => {
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

    // 정규식 수정: 숫자와 소수점(.) 하나를 허용
    if (/^\d*\.?\d*$/.test(val) && val !== "" && val !== ".") {
      const userNum = parseFloat(val);
      const correctNum = arr[idx].correctAnswer;

      // 소수점 계산 오차 방지를 위해 toFixed()나 작은 오차범위(EPSILON) 사용
      // 여기서는 소수점 첫째자리 문제이므로 toFixed(1)로 변환 후 비교가 안전합니다.
      arr[idx].isCorrect = Math.abs(userNum - correctNum) < 0.0001;
    } else {
      arr[idx].isCorrect = null;
    }

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
              <div key={p.id} className="problem">
                {p.display} ={" "}
                <input
                  className={`answer ${p.isCorrect === true ? "correct" : ""} ${
                    p.isCorrect === false ? "incorrect" : ""
                  }`}
                  value={p.userAnswer}
                  onChange={(e) => handleInput(e, i)}
                />
              </div>
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

export default TestComponent;
