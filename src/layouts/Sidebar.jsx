/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ menuItems, selectedType, onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation(); // 부모로 이벤트 전파 차단
    setIsOpen((prevState) => !prevState);
  };

  const handleMenuClick = (e, itemId) => {
    e.preventDefault(); // 브라우저 기본 동작 방지
    e.stopPropagation(); // 이벤트가 부모(aside, div)로 퍼지는 것 방지

    onMenuClick(itemId);

    // 모바일 환경 체크를 더 정확하게 하기 위해 768px 이하일 때만 실행
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`sidebar-container ${isOpen ? "open" : "closed"}`}
      onClick={(e) => e.stopPropagation()}
    >
      <aside className="sidebar-menu" onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-handle" onClick={toggleSidebar}>
          {isOpen ? "CLOSE" : "MENU"}
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={selectedType === item.id ? "active" : ""}
                // 부모로부터 전달받은 클릭 핸들러 함수 호출
                onClick={(e) => handleMenuClick(e, item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
