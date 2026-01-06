import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/math_trail_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 메뉴 항목 데이터
  const menuItems = [
    { path: "/practice/basic", label: "BASIC" },
    { path: "/practice/decimal", label: "DECIMAL" },
    { path: "/practice/fraction", label: "FRACTION" },
    { path: "/practice/geometry", label: "GEOMETRY" },
    { path: "/practice/statistics", label: "STATISTICS" },
  ];

  return (
    <header className="main-header">
      {/* 로고 영역 */}
      <div
        className="header__logo"
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); // 스페이스바 스크롤 방지
            navigate("/");
          }
        }}
        aria-label="홈으로 이동"
      >
        <img src={logoImage} alt="Math Trail Logo" className="logo" />
        <div className="title">
          <h1 className="title__main">
            <span className="title__main-left">MATH</span>
            <span className="title__main-right">TRAIL</span>
          </h1>
          <p className="title__sub">Practice & Progress</p>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav aria-label="주요 메뉴">
        <ul className="nav__list">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={
                location.pathname === item.path
                  ? "nav__item active"
                  : "nav__item"
              }
            >
              <button
                onClick={() => navigate(item.path)}
                className="nav__button"
                aria-current={
                  location.pathname === item.path ? "page" : undefined
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
