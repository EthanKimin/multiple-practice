import useTestLogic from "../hooks/useTestLogic";
import TestBasic from "../components/TestBasic";
import TestLayout from "../layouts/TestLayout";
import "./TestPage.css";

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
        <TestBasic
          key={selectedItem.id}
          title={selectedItem.title}
          type={selectedItem.id}
          maxNum={selectedItem.maxNum}
        />
      ) : (
        <div className="placeholder-text">연습할 종류를 선택하세요.</div>
      )}
    </TestLayout>
  );
};

export default Decimal;
