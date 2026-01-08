import { useEffect, useRef, useState } from "react";
import "./Timer.css";

// eslint-disable-next-line react/prop-types
const Timer = ({ isRunning, onTimeChange }) => {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);

  // 타이머 로직
  useEffect(() => {
    if (isRunning) {
      // 시작할 때 0으로 초기화
      setSecond(0);

      intervalRef.current = setInterval(() => {
        setSecond((prev) => {
          const newSecond = prev + 1;
          // 상태 업데이트와 동시에 부모에게 알림
          onTimeChange?.(newSecond);
          return newSecond;
        });
      }, 1000);
    } else {
      // 정지할 때 interval 정리
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onTimeChange]);

  return (
    <div className="timer">
      <div className="timer__display">
        <span className="timer__value">{second}</span>
        <span className="timer__unit">초</span>
      </div>
    </div>
  );
};

export default Timer;
