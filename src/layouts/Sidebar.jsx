/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ menuItems, selectedType, onMenuClick }) => {
  const [isSlideIn, setIsSlideIn] = useState(true);
  const toggleSidebar = (e) => {
    e.preventDefault();
    e.stopPropagation(); // 부모로 이벤트 전파 차단
    setIsSlideIn((prevState) => !prevState);
  };

  const handleMenuClick = (e, itemId) => {
    e.preventDefault();
    e.stopPropagation(); // 부모로 이벤트 전파 차단
    setIsSlideIn(false);
    onMenuClick(itemId);
  };

  // 상태가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log("Sidebar isSlideIn state changed to:", isSlideIn);
  }, [isSlideIn]); // isSlideIn 상태가 변경될 때마다 실행

  return (
    <div className={`sidebar-container ${isSlideIn ? "open" : "closed"}`}>
      <aside className="sidebar-menu">
        <div className="sidebar-handle" onClick={toggleSidebar}>
          {isSlideIn ? "V" : "MENU"}
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
