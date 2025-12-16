import useTestLayout from "../hooks/useTestLayout";
import TestBasic from "../components/TestBasic";

import "./TestPage.css";

const Basic = () => {
  const menuItems = [
    { id: "plus", title: "덧셈연습", maxNum: 9 },
    { id: "multiple", title: "곱셈연습", maxNum: 9 },
    { id: "minus", title: "뺄셈연습", maxNum: 9 },
    { id: "division", title: "나눗셈연습", maxNum: 9 },
  ];

  const { Layout } = useTestLayout(menuItems, "기본연산", TestBasic);
  return <Layout />;
};

export default Basic;
