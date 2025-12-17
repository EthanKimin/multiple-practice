import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./shared-page-style.css";
import Placeholder from "../components/Placeholder";

const Decimal = () => {
  const menuItems = [
    { id: "decimalFirstPlus", title: "한자리수 소수의 덧셈", maxNum: 99 },
    { id: "decimalFirstMinus", title: "한자리수 소수의 뺄셈", maxNum: 99 },
    { id: "decimalSecondPlus", title: "두자리수 소수의 덧셈", maxNum: 999 },
    { id: "decimalSecondMinus", title: "두자리수 소수의 뺄셈", maxNum: 999 },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="소수 연산 연습"
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

export default Decimal;
