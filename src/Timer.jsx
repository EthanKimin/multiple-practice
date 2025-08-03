import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Timer = ({ isRunning }) => {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    } else {
      // 정지 시 interval 제거
      clearInterval(intervalRef.current);
    }

    // 컴포넌트가 언마운트되거나 isRunning 변경될 때 정리
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // ✅ isRunning을 의존성 배열에 추가

  return (
    <div className="timeContainer">
      <div className="timeContainer_second">{second}초</div>
    </div>
  );
};
export default Timer;
