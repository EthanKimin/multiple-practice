import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Timer = ({ isRunning, onTimeChange }) => {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);

  // 1. 타이머 숫자 증가 로직
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // 2. 상태 변경 후 부모에게 알림
  useEffect(() => {
    if (second > 0) {
      onTimeChange?.(second);
    }
  }, [second, onTimeChange]);

  return (
    <div className="body__content__first__timer">
      <div className="body__content__first__timer__second">{second}초</div>
    </div>
  );
};

export default Timer;
