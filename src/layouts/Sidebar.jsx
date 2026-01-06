/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ menuItems, selectedType, onMenuClick }) => {
  // 데스크톱에서는 항상 열림, 모바일에서는 기본 닫힘
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true); // 데스크톱에서는 항상 열림
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClick = (itemId) => {
    onMenuClick(itemId);

    // 모바일에서는 메뉴 선택 후 자동으로 닫힘
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* 모바일 오버레이 (열렸을 때만) */}
      {isOpen && window.innerWidth <= 768 && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
        <aside className="sidebar-menu" aria-label="카테고리 메뉴">
          {/* 토글 버튼 */}
          <button
            className="sidebar-toggle"
            onClick={toggleSidebar}
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
          >
            <span className="sidebar-toggle__text">
              {isOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* 메뉴 리스트 */}
          <nav>
            <ul className="sidebar-list">
              {menuItems.map((item) => (
                <li key={item.id} className="sidebar-item">
                  <button
                    className={`sidebar-button ${
                      selectedType === item.id ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick(item.id)}
                    aria-current={selectedType === item.id ? "page" : undefined}
                  >
                    {item.icon && (
                      <span className="sidebar-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <span className="sidebar-title">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
