import "./Home.css";
import { Link } from "react-router-dom";

// 카테고리 카드 컴포넌트
// eslint-disable-next-line react/prop-types
const CategoryCard = ({ title, icon, description, link }) => (
  <Link to={link} className="category-card">
    <div className="category-card__icon">{icon}</div>
    <h3 className="category-card__title">{title}</h3>
    <p className="category-card__description">{description}</p>
  </Link>
);

const Home = () => {
  const categories = [
    {
      title: "기본 연산",
      icon: "➕",
      description: "덧셈, 뺄셈, 곱셈, 나눗셈의 기초를 다집니다",
      link: "/practice/basic",
    },
    {
      title: "소수",
      icon: "🔢",
      description: "소수의 개념과 연산을 배웁니다",
      link: "/practice/decimal",
    },
    {
      title: "분수",
      icon: "🍕",
      description: "분수의 이해와 계산 방법을 익힙니다",
      link: "/practice/fraction",
    },
    {
      title: "도형",
      icon: "📐",
      description: "도형의 넓이와 둘레를 계산합니다",
      link: "/practice/geometry",
    },
    {
      title: "통계",
      icon: "📊",
      description: "데이터 분석의 기초를 배웁니다",
      link: "/practice/statistics",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="welcome page">
        <div className="welcome__container1">
          <h1 className="welcome__title">
            <span className="welcome__container1__element1">Mathematics</span>
            <span className="welcome__container1__element2">is</span>
          </h1>
        </div>
        <div className="welcome__container2">
          <div className="welcome__subtitle">
            <span className="welcome__container2__element3">Practice</span>
            <span className="welcome__container2__element4">&</span>
            <span className="welcome__container2__element5">Progress</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="welcome__cta">
          <Link to="/practice/basic" className="cta-button cta-button--primary">
            지금 시작하기
          </Link>
          <a href="#features" className="cta-button cta-button--secondary">
            더 알아보기
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="page explain" id="features">
        <div className="explain__text">
          <div className="explain__text__container">
            <h2 className="explain__text__heading">
              <span className="explain__text__element1">Math Trail</span>
              <span className="explain__text__element2">은</span>
            </h2>
          </div>
          <div className="explain__text__container">
            <p className="explain__text__description">
              <span className="explain__text__element3">기본부터</span>
              <span className="explain__text__element4">심화까지</span>
              <span className="explain__text__element5">
                철저히 잡아줍니다!
              </span>
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-item__icon">📚</div>
            <h3>체계적인 학습</h3>
            <p>단계별로 구성된 커리큘럼</p>
          </div>
          <div className="feature-item">
            <div className="feature-item__icon">📈</div>
            <h3>진도 추적</h3>
            <p>학습 진행 상황을 한눈에</p>
          </div>
          <div className="feature-item">
            <div className="feature-item__icon">🎯</div>
            <h3>맞춤 학습</h3>
            <p>수준에 맞는 문제 제공</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="page categories">
        <div className="categories__header">
          <h2 className="categories__title">학습 카테고리</h2>
          <p className="categories__subtitle">
            다양한 수학 주제를 마스터하세요
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="page how-it-works">
        <h2 className="section-title">시작하는 방법</h2>
        <div className="steps">
          <div className="step">
            <div className="step__number">1</div>
            <h3>카테고리 선택</h3>
            <p>학습하고 싶은 주제를 선택하세요</p>
          </div>
          <div className="step">
            <div className="step__number">2</div>
            <h3>문제 풀기</h3>
            <p>다양한 난이도의 문제를 풀어보세요</p>
          </div>
          <div className="step">
            <div className="step__number">3</div>
            <h3>실력 향상</h3>
            <p>반복 학습으로 수학 실력을 키우세요</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page final-cta">
        <div className="final-cta__content">
          <h2>지금 바로 시작하세요!</h2>
          <p>수학이 쉬워지는 경험을 해보세요</p>
          <Link to="/practice/basic" className="cta-button cta-button--large">
            무료로 시작하기 →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
