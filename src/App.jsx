import "./App.css";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basic from "./pages/Basic";
import Decimal from "./pages/Decimal";
import Fraction from "./pages/Fraction";
import Geometry from "./pages/Geometry";
import Statistics from "./pages/Statistics";

const App = () => {
  return (
    <>
      <Header />
      {/* 라우트에 따라 내용이 변경되는 영역 */}
      <main className="main-content-snapping-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/decimal" element={<Decimal />} />
          <Route path="/fraction" element={<Fraction />} />
          <Route path="/geometry" element={<Geometry />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
