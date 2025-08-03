import { useState } from "react";
import "./App.css";
import Timer from "./Timer";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <div className="">
        <Timer isRunning={isRunning} />
        <input
          type="button"
          value="시작"
          className="strtBtn"
          onClick={() => setIsRunning(true)}
        />
      </div>
    </>
  );
};

export default App;
