import useTestLogic from "../hooks/useTestLogic";
import TestBasic from "../components/TestBasic";
import TestLayout from "../layouts/TestLayout";
import "./TestPage.css";

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

export default Basic;
