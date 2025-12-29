import { Link } from "react-router-dom";
import "./InfoPages.css";

const About = () => {
  return (
    <div className="info-page about-page">
      <div className="info-container">
        <section className="about-hero">
          <h1>Math Trail</h1>
          <p className="about-tagline">수학이 쉬워지는 경험</p>
        </section>

        <section className="info-section">
          <h2>우리의 미션</h2>
          <p>
            Math Trail은 모든 학생이 수학을 쉽고 재미있게 배울 수 있도록
            돕습니다. 체계적인 문제 풀이와 맞춤형 학습을 통해 수학 실력을
            키우고, 학습 과정을 추적하여 성장을 확인할 수 있습니다.
          </p>
        </section>

        <section className="info-section">
          <h2>제공하는 서비스</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">➕</span>
              <h3>기본 연산</h3>
              <p>덧셈, 뺄셈, 곱셈, 나눗셈의 기초를 탄탄하게</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🔢</span>
              <h3>소수</h3>
              <p>소수의 개념과 연산을 쉽게 이해</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🍕</span>
              <h3>분수</h3>
              <p>분수의 이해와 계산 방법 습득</p>
            </div>
            <div className="service-card">
              <span className="service-icon">📐</span>
              <h3>도형</h3>
              <p>도형의 넓이와 둘레 계산 마스터</p>
            </div>
            <div className="service-card">
              <span className="service-icon">📊</span>
              <h3>통계</h3>
              <p>데이터 분석의 기초 다지기</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Math Trail의 특징</h2>
          <ul className="features-list">
            <li>
              <strong>체계적인 커리큘럼:</strong> 단계별로 구성된 학습 과정
            </li>
            <li>
              <strong>진도 추적:</strong> 학습 진행 상황을 한눈에 확인
            </li>
            <li>
              <strong>맞춤 학습:</strong> 수준에 맞는 문제 제공
            </li>
            <li>
              <strong>무료 제공:</strong> 모든 학생이 접근 가능한 교육
            </li>
            <li>
              <strong>반응형 디자인:</strong> PC, 태블릿, 모바일 모두 지원
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>개발자 정보</h2>
          <p>
            Math Trail은 학생들의 수학 학습을 돕기 위해 개발되었습니다. 지속적인
            개선과 업데이트를 통해 더 나은 학습 경험을 제공하기 위해 노력하고
            있습니다.
          </p>
        </section>

        <section className="info-section">
          <h2>문의하기</h2>
          <p>
            서비스에 대한 문의사항이나 제안이 있으시면 언제든지 연락해 주세요.
          </p>
          <div className="contact-info">
            <p>
              이메일:{" "}
              <a href="mailto:rlagmlruadle@icloud.com">
                rlagmlruadle@icloud.com
              </a>
            </p>
          </div>
        </section>

        <section className="about-cta">
          <h2>지금 시작하세요!</h2>
          <p>Math Trail과 함께 수학 실력을 키워보세요</p>
          <Link to="/practice/basic" className="cta-button">
            학습 시작하기 →
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
