import { useState } from "react";
import Test from "../components/Test";
import Sidebar from "../layouts/Sidebar";
import "./TestPage.css";

const Basic = () => {
  const [selectedType, setSelectedType] = useState(null);

  const menuItems = [
    { id: "plus", title: "덧셈연습", maxNum: 9 },
    { id: "multiple", title: "곱셈연습", maxNum: 9 },
    { id: "minus", title: "뺄셈연습", maxNum: 9 },
    { id: "division", title: "나눗셈연습", maxNum: 9 },
  ];

  const handleMenuClick = (type) => {
    setSelectedType(type);
  };

  // 선택된 타입에 따라 메인 콘텐츠 결정
  const renderContent = () => {
    const selectedItem = menuItems.find((item) => item.id === selectedType);
    if (selectedItem) {
      return (
        <Test
          key={selectedItem.id}
          title={selectedItem.title}
          type={selectedItem.id}
          maxNum={selectedItem.maxNum}
        />
      );
    } else {
      return (
        <div className="placeholder-text">
          왼쪽에서 연산 종류를 선택해 주세요
        </div>
      );
    }
  };

  return (
    <div className="app page">
      <div className="sidebar-container">
        <Sidebar
          menuItems={menuItems}
          selectedType={selectedType}
          onMenuClick={handleMenuClick}
        />
      </div>

      {/* 메인콘텐츠 영역 */}
      <div className="test-container">
        <h2>기본 연산</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Basic;
