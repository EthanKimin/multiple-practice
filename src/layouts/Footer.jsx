import "./Footer.css";
const Footer = () => {
  return (
    // footer 태그에 'page' 클래스를 추가하여 Home 화면에서 스내핑 섹션으로 사용
    <footer className="page">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Math Trail. All rights reserved.
        </p>
        <p>
          학습 문의:{" "}
          <a href="mailto:rlagmlruadle@icloud.com">rlagmlruadle@icloud.com</a>
        </p>
        <nav>
          <ul>
            <li>
              <a href="/privacy">개인정보처리방침</a>
            </li>
            <li>
              <a href="/terms">이용약관</a>
            </li>
            <li>
              <a href="/about">사이트 소개</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
