import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, lazy, Suspense } from "react";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Basic = lazy(() => import("./pages/Basic"));
const Decimal = lazy(() => import("./pages/Decimal"));
const Fraction = lazy(() => import("./pages/Fraction"));
const Geometry = lazy(() => import("./pages/Geometry"));
const Statistics = lazy(() => import("./pages/Statistics"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>로딩 중...</p>
  </div>
);

// Page titles mapping
const pageTitles = {
  "/": "Math Trail | Practice & Progress",
  "/basic": "Basic Math | Math Trail",
  "/decimal": "Decimal | Math Trail",
  "/fraction": "Fraction | Math Trail",
  "/geometry": "Geometry | Math Trail",
  "/statistics": "Statistics | Math Trail",
  "/privacy": "Privacy Policy | Math Trail",
};

const App = () => {
  const mainRef = useRef(null);
  const location = useLocation();

  // Handle scroll restoration and page title
  useEffect(() => {
    // Scroll to top on route change
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);

    // Update page title
    document.title = pageTitles[location.pathname] || "Math Trail";

    // Google Analytics pageview tracking (optional)
    if (window.gtag) {
      window.gtag("config", "YOUR-GA-ID", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main ref={mainRef} className="main-content-snapping-area">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* practice 페이지들 */}
            <Route path="/practice">
              <Route path="basic" element={<Basic />} />
              <Route path="decimal" element={<Decimal />} />
              <Route path="fraction" element={<Fraction />} />
              <Route path="geometry" element={<Geometry />} />
              <Route path="statistics" element={<Statistics />} />
            </Route>
            {/* 정보페이지들 */}
            <Route path="/privacy" element={<Privacy />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default App;
