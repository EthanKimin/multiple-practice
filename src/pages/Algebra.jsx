import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Algebra = () => {
  const menuItems = [
    { id: "distributiveSimple", title: "단항식 × 다항식 (기본)", maxNum: 7, icon: "✏️" },
    { id: "distributiveCoeff", title: "단항식 × 다항식 (계수)", maxNum: 5, icon: "📝" },
    { id: "distributiveDivide", title: "다항식 ÷ 단항식", maxNum: 5, icon: "➗" },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="문자를 사용한 식 — 분배법칙"
      selectedType={selectedType}
      onMenuClick={handleMenuClick}
    >
      {selectedItem ? (
        <BasicAndDecimalTest
          key={selectedItem.id}
          title={selectedItem.title}
          type={selectedItem.id}
          maxNum={selectedItem.maxNum}
        />
      ) : (
        <Placeholder />
      )}
    </TestLayout>
  );
};

export default Algebra;
