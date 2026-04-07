import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Basic = () => {
  const menuItems = [
    { id: "plus", title: "덧셈연습", maxNum: 9, icon: "➕" },
    { id: "multiple", title: "곱셈연습", maxNum: 9, icon: "✖️" },
    { id: "minus", title: "뺄셈연습", maxNum: 9, icon: "➖" },
    { id: "division", title: "나눗셈연습", maxNum: 9, icon: "➗" },
    { id: "integerPlus", title: "정수의 덧셈", maxNum: 10, icon: "🔢" },
    { id: "integerMinus", title: "정수의 뺄셈", maxNum: 10, icon: "🔣" },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="기초 연산 연습"
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

export default Basic;
