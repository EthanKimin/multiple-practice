import useTestLayout from "../hooks/useTestLayout";
import TestBasic from "../components/TestBasic";

import "./TestPage.css";

const Decimal = () => {
  const menuItems = [
    { id: "decimalFirstPlus", title: "한자리수 소수의 덧셈", maxNum: 99 },
    { id: "decimalFirstMinus", title: "한자리수 소수의 뺄셈", maxNum: 99 },
    { id: "decimalSecondPlus", title: "두자리수 소수의 덧셈", maxNum: 999 },
    { id: "decimalSecondMinus", title: "두자리수 소수의 뺄셈", maxNum: 999 },
  ];

  const { Layout } = useTestLayout(menuItems, "소수연산", TestBasic);
  return <Layout />;
};

export default Decimal;
