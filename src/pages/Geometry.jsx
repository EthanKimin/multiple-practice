import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Geometry = () => {
  const menuItems = [
    { id: "rectArea", title: "직사각형의 넓이", maxNum: 9, icon: "▭" },
    { id: "triangleArea", title: "삼각형의 넓이", maxNum: 7, icon: "△" },
    { id: "parallelogramArea", title: "평행사변형의 넓이", maxNum: 9, icon: "▱" },
    { id: "trapezoidArea", title: "사다리꼴의 넓이", maxNum: 6, icon: "⏢" },
    { id: "rectPerimeter", title: "직사각형의 둘레", maxNum: 9, icon: "⬜" },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="도형 연산 연습"
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

export default Geometry;
