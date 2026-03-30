import useTestLogic from "../hooks/useTestLogic";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Statistics = () => {
  const menuItems = [
    { id: "average", title: "평균 구하기", icon: "📊" },
    { id: "median", title: "중앙값 구하기", icon: "📈" },
  ];
  const { selectedType, handleMenuClick } = useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="통계 연습"
      selectedType={selectedType}
      onMenuClick={handleMenuClick}
    >
      <Placeholder />
    </TestLayout>
  );
};

export default Statistics;
