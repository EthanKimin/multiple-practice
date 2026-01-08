/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import Timer from "./Timer";
import ProblemRow from "./ProblemRow";
import "./TestComponent.css";
import { generateProblems, isSameFraction } from "../utils/problemGenerator";

/**
 * 기본 연산 및 소수 테스트 컴포넌트
 * @param {string} title - 테스트 제목
 * @param {string} type - 문제 유형 (plus, minus, multiple, division)
 * @param {number} maxNum - 최대 숫자 범위
 */
export const BasicAndDecimalTest = ({ title, type, maxNum = 9 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [allCorrect, setAllCorrect] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [problems, setProblems] = useState([]);

  // 컴포넌트 마운트 시 또는 type/maxNum 변경 시 문제 생성
  useEffect(() => {
    setProblems(generateProblems(type, maxNum));
    setIsRunning(false);
    setVisible(false);
    setAllCorrect(false);
  }, [type, maxNum]);

  /** 일반 숫자 입력 처리 */
  const handleInput = useCallback((idx, val) => {
    setProblems((prev) => {
      const arr = [...prev];
      arr[idx].userAnswer = val;

      const correctNum = arr[idx].correctAnswer;
      if (/^\d*\.?\d*$/.test(val) && val !== "" && val !== ".") {
        arr[idx].isCorrect = Math.abs(parseFloat(val) - correctNum) < 0.0001;
      } else {
        arr[idx].isCorrect = null;
      }
      return arr;
    });
  }, []);

  /** 분수 입력 처리 */
  const handleFractionInput = useCallback((idx, val) => {
    setProblems((prev) => {
      const arr = [...prev];
      arr[idx].userAnswer = val;

      const n = parseInt(val.n, 10);
      const d = parseInt(val.d, 10);

      if (!isNaN(n) && !isNaN(d) && d !== 0) {
        arr[idx].isCorrect = isSameFraction({ n, d }, arr[idx].correctAnswer);
      } else {
        arr[idx].isCorrect = null;
      }
      return arr;
    });
  }, []);

  /** 모든 정답 체크 */
  useEffect(() => {
    if (problems.length > 0 && visible) {
      setAllCorrect(problems.every((p) => p.isCorrect === true));
    }
  }, [problems, visible]);

  /** 시작 / 리셋 */
  const handleStartReset = useCallback(() => {
    setProblems(generateProblems(type, maxNum));
    setIsRunning(true);
    setVisible(true);
    setElapsed(0);
    setResetKey((k) => k + 1);
    setAllCorrect(false);
  }, [type, maxNum]);

  /** 제출 */
  const handleSubmit = useCallback(() => {
    setIsRunning(false);

    // 시간 포맷팅
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeString =
      minutes > 0 ? `${minutes}분 ${seconds}초` : `${seconds}초`;

    alert(
      `🎉 축하합니다!\n\n소요 시간: ${timeString}\n모든 문제를 맞혔습니다!`
    );
  }, [elapsed]);

  /** 타이머 시간 업데이트 */
  const handleTimeChange = useCallback((time) => {
    setElapsed(time);
  }, []);

  return (
    <div className="test">
      {/* 제목 */}
      <div className="test__header">
        <h3 className="test__title">{title}</h3>
      </div>

      <div className="test__content">
        {/* 컨트롤 영역 (시작/리셋 버튼 + 타이머) */}
        <div className="test__controls">
          <button
            className={`test__button ${
              isRunning ? "test__button--reset" : "test__button--start"
            }`}
            onClick={handleStartReset}
          >
            {isRunning ? "🔄 리셋" : "▶️ 시작"}
          </button>

          <Timer
            key={resetKey}
            isRunning={isRunning}
            onTimeChange={handleTimeChange}
          />
        </div>

        {/* 문제 영역 */}
        {visible && problems.length > 0 && (
          <div className="test__problems">
            {problems.map((p, i) => (
              <ProblemRow
                key={p.id}
                problem={p}
                type={type}
                onAnswerChange={(val) =>
                  type === "fractionPlusSimple"
                    ? handleFractionInput(i, val)
                    : handleInput(i, val)
                }
              />
            ))}
          </div>
        )}

        {/* 제출 버튼 */}
        {visible && allCorrect && (
          <div className="test__submit-container">
            <button
              className="test__button test__button--submit"
              onClick={handleSubmit}
            >
              ✓ 제출하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
