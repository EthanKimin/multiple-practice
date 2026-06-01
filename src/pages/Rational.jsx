import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Rational = () => {
  const menuItems = [
    { id: "integerPlus", title: "정수의 덧셈", maxNum: 10, icon: "➕" },
    { id: "integerMinus", title: "정수의 뺄셈", maxNum: 10, icon: "➖" },
    { id: "rationalPlus", title: "유리수의 덧셈", maxNum: 5, icon: "➕" },
    { id: "rationalMinus", title: "유리수의 뺄셈", maxNum: 5, icon: "➖" },
    { id: "rationalMultiple", title: "유리수의 곱셈", maxNum: 4, icon: "✖️" },
    { id: "rationalDivision", title: "유리수의 나눗셈", maxNum: 4, icon: "➗" },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="정수와 유리수 연산 연습"
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

export default Rational;
