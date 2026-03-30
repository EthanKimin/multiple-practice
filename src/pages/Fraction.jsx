import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Fraction = () => {
  const menuItems = [
    { id: "fractionPlusSimple", title: "같은 분모의 덧셈", maxNum: 9 },
    { id: "fractionMinusSimple", title: "같은 분모의 뺄셈", maxNum: 9 },
    { id: "fractionPlusDiff", title: "다른 분모의 덧셈", maxNum: 6 },
    { id: "fractionMinusDiff", title: "다른 분모의 뺄셈", maxNum: 6 },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="분수 연산 연습"
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

export default Fraction;
