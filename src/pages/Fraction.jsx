import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./shared-page-style.css";
import Placeholder from "../components/Placeholder";

const Fraction = () => {
  const menuItems = [
    { id: "fractionPlusSimple", title: "분수의 덧셈", maxNum: 9 },
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
