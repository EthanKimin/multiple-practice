import Test from "../components/Test";

const Basic = () => {
  return (
    <div className="app page">
      <h2>기본 연산 연습</h2>
      <Test title="덧셈 연습" type="plus" maxNum={9} />
      <Test title="곱셈 연습" type="multiple" maxNum={9} />
      <Test title="뺄셈 연습" type="minus" maxNum={9} />
    </div>
  );
};

export default Basic;
