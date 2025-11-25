import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Test from "./Test";
import TestMinus from "./TestMinus";

const App = () => {
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [allCorrect1, setAllCorrect1] = useState(false);
  const [allCorrect2, setAllCorrect2] = useState(false);
  const [elapsedTime1, setElapsedTime1] = useState(0);
  const [elapsedTime2, setElapsedTime2] = useState(0); // ✅ 시간 상태

  const handleSubmit1 = () => {
    setIsRunning1(false); // 타이머 정지
    alert(`소요 시간: ${elapsedTime1}초`);
  };
  const handleSubmit2 = () => {
    setIsRunning2(false); // 타이머 정지
    alert(`소요 시간: ${elapsedTime2}초`);
  };

  return (
    <>
      <body>
        {/* 곱셈문제세트 */}
        <div className="body">
          <h1 className="body__title">곱셈 연습</h1>
          <div className="body__content">
            <div className="body__content__first">
              <button
                className="body__content__first__strtBtn"
                onClick={() => {
                  setIsRunning1(true);
                  setVisible1(true);
                  setAllCorrect1(false);
                  setElapsedTime1(0); // ✅ 시간 초기화
                }}
              >
                시작
              </button>
              <Timer
                isRunning={isRunning1}
                onTimeChange={setElapsedTime1} // ✅ 시간 전달 받기
              />
            </div>
            <Test
              visible={visible1}
              maxNum={9}
              onAllCorrectChange={setAllCorrect1}
              className="body__content__test"
            />
            {allCorrect1 && (
              <button
                className="body__content__submitBtn"
                onClick={handleSubmit1}
              >
                제출
              </button>
            )}
          </div>
        </div>
        {/* 뺄셈문제세트 */}
        <div className="body">
          <h1 className="body__title">뺄셈 연습</h1>
          <div className="body__content">
            <div className="body__content__first">
              <button
                className="body__content__first__strtBtn"
                onClick={() => {
                  setIsRunning2(true);
                  setVisible2(true);
                  setAllCorrect2(false);
                  setElapsedTime2(0); // ✅ 시간 초기화
                }}
              >
                시작
              </button>
              <Timer
                isRunning={isRunning2}
                onTimeChange={setElapsedTime2} // ✅ 시간 전달 받기
              />
            </div>
            <TestMinus
              visible={visible2}
              maxNum={9}
              onAllCorrectChange={setAllCorrect2}
              className="body__content__test"
            />
            {allCorrect2 && (
              <button
                className="body__content__submitBtn"
                onClick={handleSubmit2}
              >
                제출
              </button>
            )}
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
