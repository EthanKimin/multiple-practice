import { Link } from "react-router-dom";
// import "./NotFound.css"; // 스타일 파일 생성 필요

const NotFound = () => {
  return (
    <div className="not-found-container page">
      <div className="not-found-content">
        <h2 className="not-found-code">404</h2>
        <h3 className="not-found-title">페이지를 찾을 수 없습니다</h3>
        <p className="not-found-message">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-btn-primary">
            홈으로 돌아가기
          </Link>
          <button
            onClick={() => window.history.back()}
            className="not-found-btn-secondary"
          >
            이전 페이지로
          </button>
        </div>

        <div className="suggested-links">
          <h4>추천 페이지</h4>
          <ul>
            <li>
              <Link to="/basic">기본 연산</Link>
            </li>
            <li>
              <Link to="/decimal">소수</Link>
            </li>
            <li>
              <Link to="/fraction">분수</Link>
            </li>
            <li>
              <Link to="/geometry">도형</Link>
            </li>
            <li>
              <Link to="/statistics">통계</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
