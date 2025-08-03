import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Test from "./Test";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // ✅ 시간 상태

  const handleSubmit = () => {
    setIsRunning(false); // 타이머 정지
    alert(`소요 시간: ${elapsedTime}초`);
  };

  return (
    <>
      <h1>곱셈 연습</h1>
      <div className="body">
        <button
          className="strtBtn"
          onClick={() => {
            setIsRunning(true);
            setVisible(true);
            setAllCorrect(false);
            setElapsedTime(0); // ✅ 시간 초기화
          }}
        >
          시작
        </button>
        <Timer
          isRunning={isRunning}
          onTimeChange={setElapsedTime} // ✅ 시간 전달 받기
        />
        <Test visible={visible} maxNum={9} onAllCorrectChange={setAllCorrect} />
        {allCorrect && (
          <button className="submitBtn" onClick={handleSubmit}>
            제출
          </button>
        )}
      </div>
    </>
  );
};

export default App;
