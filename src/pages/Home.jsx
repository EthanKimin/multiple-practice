import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="welcome page">
        <div className="welcome__container1">
          <div className="welcome__container1__element1">Mathmatics</div>
          <div className="welcome__container1__element2">is</div>
        </div>
        <div className="welcome__container2">
          <div className="welcome__container2__element3">Practice</div>
          <div className="welcome__container2__element4">&</div>
          <div className="welcome__container2__element5">Progress</div>
        </div>
      </div>
      <div className="page explain">
        <div className="explain__text">
          <div className="explain__text__container">
            <div className="explain__text__element1">Math Trail</div>
            <div className="explain__text__element2">은</div>
          </div>
          <div className="explain__text__container">
            <div className="explain__text__element3">기본부터</div>
            <div className="explain__text__element4">심화까지</div>
            <div className="explain__text__element5">철저히 잡아줍니다!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
