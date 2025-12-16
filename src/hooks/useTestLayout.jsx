import { useState } from "react";
import Sidebar from "../layouts/Sidebar";

const useTestLayout = (menuItems, pageTitle, TestComponent) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleMenuClick = (type) => {
    setSelectedType(type);
  };

  // 선택된 타입에 따라 메인 콘텐츠 결정
  const renderContent = () => {
    const selectedItem = menuItems.find((item) => item.id === selectedType);
    if (selectedItem && TestComponent) {
      // TestComponent가 전달되었는지 확인
      return (
        <TestComponent // 전달받은 컴포넌트 렌더링
          key={selectedItem.id}
          title={selectedItem.title}
          type={selectedItem.id}
          maxNum={selectedItem.maxNum}
          // 필요한 다른 프롭스 추가 전달 가능
        />
      );
    } else {
      return (
        <div className="placeholder-text">
          왼쪽에서 연습할 종류를 선택해 주세요
        </div>
      );
    }
  };

  // 공통 레이아웃을 반환하는 헬퍼 컴포넌트
  const Layout = () => (
    <div className="app page">
      <Sidebar
        menuItems={menuItems}
        selectedType={selectedType}
        onMenuClick={handleMenuClick}
      />
      <div className="test-container">
        <h2>{pageTitle}</h2>
        {renderContent()}
      </div>
    </div>
  );

  // 훅은 최종 레이아웃 컴포넌트를 반환합니다.
  return { Layout };
};

export default useTestLayout;
