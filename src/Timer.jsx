import { useEffect, useRef, useState } from "react";

const Timer = (isRunning) => {
  const [second, setSecond] = useState(0);

  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="timeContainer">
      <div className="timeContainer_second">{second}초</div>
    </div>
  );
};
export default Timer;
