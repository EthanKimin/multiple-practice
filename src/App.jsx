import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, lazy, Suspense } from "react";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
const Home = lazy(() => import("./pages/Home"));
const Basic = lazy(() => import("./pages/Basic"));
const Decimal = lazy(() => import("./pages/Decimal"));
const Fraction = lazy(() => import("./pages/Fraction"));
const Geometry = lazy(() => import("./pages/Geometry"));
const Statistics = lazy(() => import("./pages/Statistics"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loading = () => (
  <div
    className="page loading"
    style={{ textAlign: "center", padding: "50px" }}
  >
    로딩 중...
  </div>
);

const App = () => {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      {/* 라우트에 따라 내용이 변경되는 영역 */}
      <main ref={mainRef} className="main-content-snapping-area">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/decimal" element={<Decimal />} />
            <Route path="/fraction" element={<Fraction />} />
            <Route path="/geometry" element={<Geometry />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default App;
