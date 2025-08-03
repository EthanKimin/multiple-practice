import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Timer = ({ isRunning, onTimeChange }) => {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => {
          const newTime = prev + 1;
          onTimeChange?.(newTime); // ✅ 부모로 시간 전달
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, onTimeChange]);

  return (
    <div className="timeContainer">
      <div className="timeContainer_second">{second}초</div>
    </div>
  );
};

export default Timer;
