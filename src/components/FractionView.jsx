// eslint-disable-next-line react/prop-types
const FractionView = ({ n, d }) => (
  <span className="fraction">
    <span className="fraction__top">{n}</span>
    <span className="fraction__bar" />
    <span className="fraction__bottom">{d}</span>
  </span>
);

export default FractionView;
