import useTestLogic from "../hooks/useTestLogic";
import { BasicAndDecimalTest } from "../components/TestComponent";
import TestLayout from "../layouts/TestLayout";
import "./PracticePages.css";
import Placeholder from "../components/Placeholder";

const Statistics = () => {
  const menuItems = [
    { id: "statAverage", title: "평균 구하기", maxNum: 20, icon: "📊" },
    { id: "statMedian", title: "중앙값 구하기", maxNum: 20, icon: "📈" },
    { id: "statMode", title: "최빈값 구하기", maxNum: 10, icon: "🔢" },
    { id: "statRange", title: "범위 구하기", maxNum: 20, icon: "📏" },
  ];
  const { selectedType, selectedItem, handleMenuClick } =
    useTestLogic(menuItems);

  return (
    <TestLayout
      menuItems={menuItems}
      pageTitle="통계 연습"
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

export default Statistics;
