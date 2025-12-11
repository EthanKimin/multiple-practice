import "./App.css";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Basic from "./pages/Basic";
import Decimal from "./pages/Decimal";
import Fraction from "./pages/Fraction";
import Geometry from "./pages/Geometry";
import Statistics from "./pages/Statistics";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
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

      {/* 라우트에 따라 내용이 변경되는 영역 */}
      <main className="main-content-snapping-area">
        <Routes>
          {/* 기본 경로 "/"로 접속하면 Home 컴포넌트 렌더링 */}
          <Route path="/" element={<Home />} />

          {/* "/basic" 경로로 접속하면 BasicPage 컴포넌트 렌더링 */}
          <Route path="/basic" element={<Basic />} />
          <Route path="/decimal" element={<Decimal />} />
          <Route path="/fraction" element={<Fraction />} />
          <Route path="/geometry" element={<Geometry />} />
          <Route path="/statistics" element={<Statistics />} />

          {/* 다른 메뉴 경로도 여기에 추가할 수 있습니다. */}
        </Routes>
      </main>
    </>
  );
};

export default App;
