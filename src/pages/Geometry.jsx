import useTestLogic from "../hooks/useTestLogic";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Geometry = () => {
  const menuItems = [
    { id: "area", title: "넓이 구하기", icon: "📐" },
    { id: "perimeter", title: "둘레 구하기", icon: "📏" },
  ];
  const { selectedType, handleMenuClick } = useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="도형 연산 연습"
      selectedType={selectedType}
      onMenuClick={handleMenuClick}
    >
      <Placeholder />
    </TestLayout>
  );
};

export default Geometry;
