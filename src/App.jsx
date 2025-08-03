import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Test from "./Test";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  return (
    <>
      <h1>곱셈 연습</h1>
      <div className="body">
        <button
          className="strtBtn"
          onClick={() => {
            setIsRunning(true);
            setVisible(true);
          }}
        >
          시작
        </button>
        <Timer isRunning={isRunning} />
        <Test visible={visible} maxNum={9} onAllCorrectChange={setAllCorrect} />
        {allCorrect && (
          <button className="submitBtn" onClick={() => {}}>
            제출
          </button>
        )}
      </div>
    </>
  );
};

export default App;
