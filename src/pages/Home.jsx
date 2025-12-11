import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="welcome page">
        <div className="welcome__container1">
          <div className="welcome__container1__element1">Mathmatics</div>
          <div className="welcome__container1__element2">is</div>
        </div>
        <div className="welcome__container2">
          <div className="welcome__container2__element3">Practice</div>
          <div className="welcome__container2__element4">&</div>
          <div className="welcome__container2__element5">Progress</div>
        </div>
      </section>
      <section className="page explain">
        <div className="explain_text">
          Math Trail은 기본부터 심화까지 철저히 연습하게 도와줍니다.
        </div>
      </section>
    </>
  );
};

export default Home;
