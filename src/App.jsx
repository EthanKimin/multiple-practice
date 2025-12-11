import "./App.css";
import Test from "./Test";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>
          <img src="/src/assets/math_trail_logo.png" alt="s" className="logo" />
          <div className="title">
            <div className="title_main">
              <div className="title_main_left">MATH</div>
              <div className="title_main_right">TRAIL</div>
            </div>
            <div className="title_sub">Practice & Progress</div>
          </div>
        </h1>
      </header>
      <nav>
        <ul>
          <li>BASIC</li>
          <li>DECIMAL</li>
          <li>FRACTION</li>
          <li>GEOMETRY</li>
          <li>STATISTICS</li>
        </ul>
      </nav>
      <div className="app">
        <Test title="덧셈 연습" type="plus" maxNum={9} />
        <Test title="곱셈 연습" type="multiple" maxNum={9} />
        <Test title="뺄셈 연습" type="minus" maxNum={9} />
      </div>
    </>
  );
};

export default App;
