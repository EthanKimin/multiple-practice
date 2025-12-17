/* =======================
   Fraction Utils
======================= */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const simplify = ({ n, d }) => {
  const g = gcd(Math.abs(n), Math.abs(d));
  return { n: n / g, d: d / g };
};

const addFraction = (a, b) =>
  simplify({
    n: a.n * b.d + b.n * a.d,
    d: a.d * b.d,
  });

export const isSameFraction = (a, b) => {
  if (!a || !b) return false;
  const sa = simplify(a);
  const sb = simplify(b);
  return sa.n === sb.n && sa.d === sb.d;
};

/* =======================
   Problem Generator
======================= */
export const generateProblems = (type, maxNum = 9) => {
  const make = () => Math.ceil(Math.random() * maxNum);

  const ops = {
    plus: () => {
      const a = make(),
        b = make();
      return { display: `${a} + ${b}`, correct: a + b };
    },

    minus: () => {
      const a = 10 + make(),
        b = make();
      return { display: `${a} - ${b}`, correct: a - b };
    },

    multiple: () => {
      const a = make(),
        b = make();
      return { display: `${a} × ${b}`, correct: a * b };
    },

    division: () => {
      const a = make(),
        b = make();
      return { display: `${a * b} ÷ ${b}`, correct: a };
    },

    decimalFirstPlus: () => {
      const a = make() / 10,
        b = make() / 10;
      return {
        display: `${a.toFixed(1)} + ${b.toFixed(1)}`,
        correct: Number((a + b).toFixed(1)),
      };
    },

    decimalFirstMinus: () => {
      const a = make() / 10,
        b = make() / 10;
      return {
        display: `${(a + b).toFixed(1)} - ${b.toFixed(1)}`,
        correct: Number(a.toFixed(1)),
      };
    },

    decimalSecondPlus: () => {
      const a = make() / 100,
        b = make() / 100;
      return {
        display: `${a.toFixed(2)} + ${b.toFixed(2)}`,
        correct: Number((a + b).toFixed(2)),
      };
    },
    decimalSecondMinus: () => {
      const a = make() / 100,
        b = make() / 100;
      return {
        display: `${(a + b).toFixed(2)} - ${b.toFixed(2)}`,
        correct: Number(a.toFixed(2)),
      };
    },

    fractionPlusSimple: () => {
      const d = Math.ceil(Math.random() * 5) + 1;
      const a = { n: make(), d };
      const b = { n: make(), d };

      return {
        display: { a, b, op: "+" },
        correct: addFraction(a, b),
      };
    },
  };

  return Array.from({ length: 10 }, (_, i) => {
    const { display, correct } = (ops[type] || ops.plus)();

    return {
      id: `q${i}`,
      display,
      correctAnswer: correct,
      userAnswer: type === "fractionPlusSimple" ? { n: "", d: "" } : "",
      isCorrect: null,
    };
  });
};
