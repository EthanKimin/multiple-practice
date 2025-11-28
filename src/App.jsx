import "./App.css";
import Test from "./Test";

const App = () => {
  return (
    <>
      <body>
        <Test title="덧셈 연습" type="plus" maxNum={9} />
        <Test title="곱셈 연습" type="multiple" maxNum={9} />
        <Test title="뺄셈 연습" type="minus" maxNum={9} />
      </body>
    </>
  );
};

export default App;
