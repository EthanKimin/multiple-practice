/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar";

const TestLayout = ({
  menuItems,
  pageTitle,
  selectedType,
  onMenuClick,
  children,
}) => {
  return (
    <div className="app page">
      <Sidebar
        menuItems={menuItems}
        selectedType={selectedType}
        onMenuClick={onMenuClick}
      />
      <div className="test-container">
        <h2>{pageTitle}</h2>
        {/* 실제 문제 컴포넌트(Test)가 들어갈 자리 */}
        {children}
      </div>
    </div>
  );
};

export default TestLayout;
