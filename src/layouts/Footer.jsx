import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // 푸터 링크 데이터
  const footerLinks = [
    { path: "/privacy", label: "개인정보처리방침" },
    { path: "/terms", label: "이용약관" },
    { path: "/about", label: "사이트 소개" },
  ];

  return (
    <footer className={isHomePage ? "page" : ""}>
      <div className="footer-content">
        <p className="footer-content__copyright">
          &copy; {new Date().getFullYear()} Math Trail. All rights reserved.
        </p>

        <p className="footer-content__contact">
          학습 문의:{" "}
          <a
            href="mailto:rlagmlruadle@icloud.com"
            className="footer-content__email"
          >
            rlagmlruadle@icloud.com
          </a>
        </p>

        <nav className="footer-content__nav" aria-label="푸터 메뉴">
          <ul className="footer-content__nav-list">
            {footerLinks.map((link) => (
              <li key={link.path} className="footer-content__nav-item">
                <Link to={link.path} className="footer-content__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
