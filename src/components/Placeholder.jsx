import "./Placeholder.css";

/**
 * 메뉴가 선택되지 않았을 때 표시되는 플레이스홀더
 */
const Placeholder = () => {
  return (
    <div className="placeholder">
      <div className="placeholder__icon">📚</div>
      <h3 className="placeholder__title">학습을 시작해볼까요?</h3>
      <p className="placeholder__message">
        왼쪽 메뉴에서 연습할 종류를 선택하세요
      </p>
      <div className="placeholder__arrow">←</div>
    </div>
  );
};

export default Placeholder;
