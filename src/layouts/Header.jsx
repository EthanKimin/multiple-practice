import { useNavigate, useLocation } from "react-router-dom";
// App.css에 헤더 관련 스타일이 있다면 그대로 import 합니다.
import "../App.css";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      {/* 로고 클릭 시 홈으로 이동 (useNavigate 사용) */}
      <h1 onClick={() => navigate("/")}>
        <img
          src="/src/assets/math_trail_logo.png"
          alt="logo"
          className="logo"
        />
        <div className="title">
          <div className="title_main">
            <div className="title_main_left">MATH</div>
            <div className="title_main_right">TRAIL</div>
          </div>
          <div className="title_sub">Practice & Progress</div>
        </div>
      </h1>

      <nav>
        <ul>
          {/* 메뉴 클릭 시 Link 컴포넌트를 사용하여 페이지 이동 (새로고침 방지) */}
          <li
            onClick={() => navigate("/basic")}
            className={location.pathname === "/basic" ? "active" : ""}
          >
            BASIC
          </li>
          <li
            onClick={() => navigate("/decimal")}
            className={location.pathname === "/decimal" ? "active" : ""}
          >
            DECIMAL
          </li>
          <li
            onClick={() => navigate("/fraction")}
            className={location.pathname === "/fraction" ? "active" : ""}
          >
            FRACTION
          </li>
          <li
            onClick={() => navigate("/geometry")}
            className={location.pathname === "/geometry" ? "active" : ""}
          >
            GEOMETRY
          </li>
          <li
            onClick={() => navigate("/statistics")}
            className={location.pathname === "/statistics" ? "active" : ""}
          >
            STATISTICS
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
