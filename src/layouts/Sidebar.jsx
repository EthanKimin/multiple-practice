/* eslint-disable react/prop-types */
import "./Sidebar.css";

const Sidebar = ({ menuItems, selectedType, onMenuClick }) => {
  return (
    <aside className="sidebar-menu">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={selectedType === item.id ? "active" : ""}
              // 부모로부터 전달받은 클릭 핸들러 함수 호출
              onClick={() => onMenuClick(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
