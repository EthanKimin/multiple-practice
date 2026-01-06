/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Sidebar from "./Sidebar";

/**
 * 테스트 페이지의 공통 레이아웃
 * @param {Array} menuItems - 사이드바 메뉴 아이템
 * @param {string} pageTitle - 페이지 제목
 * @param {string} selectedType - 현재 선택된 타입
 * @param {Function} onMenuClick - 메뉴 클릭 핸들러
 * @param {ReactNode} children - 메인 콘텐츠
 */
const TestLayout = ({
  menuItems,
  pageTitle,
  selectedType,
  onMenuClick,
  children,
}) => {
  // 페이지 타이틀 동적 설정
  useEffect(() => {
    document.title = `${pageTitle} | Math Trail`;
  }, [pageTitle]);

  return (
    <div className="practice-page page">
      <Sidebar
        menuItems={menuItems}
        selectedType={selectedType}
        onMenuClick={onMenuClick}
      />
      <main className="test-container">
        <header className="test-header">
          <h2 className="test-title">{pageTitle}</h2>
        </header>
        <div className="test-content">{children}</div>
      </main>
    </div>
  );
};

export default TestLayout;
