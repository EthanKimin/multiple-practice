import { useNavigate } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    // footer 태그에 'page' 클래스를 추가하여 Home 화면에서 스내핑 섹션으로 사용
    <footer className="page">
      <div className="footer-content">
        <p className="footer-content__copyright">
          &copy; {new Date().getFullYear()} Math Trail. All rights reserved.
        </p>
        <p className="footer-content__ask">
          학습 문의:{" "}
          <a href="mailto:rlagmlruadle@icloud.com">rlagmlruadle@icloud.com</a>
        </p>
        <nav className="footer-content__nav">
          <ul>
            <li onClick={() => navigate("/privacy")}>개인정보처리방침</li>
            <li onClick={() => navigate("/terms")}>이용약관</li>
            <li onClick={() => navigate("/about")}>사이트 소개</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
