import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./shared-page-style.css";
import Placeholder from "../components/Placeholder";

const Basic = () => {
  const menuItems = [
    { id: "plus", title: "덧셈연습", maxNum: 9 },
    { id: "multiple", title: "곱셈연습", maxNum: 9 },
    { id: "minus", title: "뺄셈연습", maxNum: 9 },
    { id: "division", title: "나눗셈연습", maxNum: 9 },
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
