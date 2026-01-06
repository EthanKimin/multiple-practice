/* =======================
   Fraction Utils
======================= */

/**
 * 최대공약수 계산 (유클리드 호제법)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

/**
 * 분수 약분
 * @param {Object} fraction - { n: 분자, d: 분모 }
 * @returns {Object} 약분된 분수
 */
const simplify = ({ n, d }) => {
  if (d === 0) return { n: 0, d: 1 }; // 0으로 나누기 방지
  const g = gcd(Math.abs(n), Math.abs(d));
  return { n: n / g, d: d / g };
};

/**
 * 분수 덧셈
 * @param {Object} a - { n: 분자, d: 분모 }
 * @param {Object} b - { n: 분자, d: 분모 }
 * @returns {Object} 결과 분수
 */
const addFraction = (a, b) =>
  simplify({
    n: a.n * b.d + b.n * a.d,
    d: a.d * b.d,
  });

/**
 * 두 분수가 같은지 비교 (약분하여 비교)
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
export const isSameFraction = (a, b) => {
  if (!a || !b) return false;
  const sa = simplify(a);
  const sb = simplify(b);
  return sa.n === sb.n && sa.d === sb.d;
};

/* =======================
   Random Number Generator
======================= */

/**
 * 1부터 max까지의 랜덤 정수 생성
 * @param {number} max
 * @returns {number}
 */
const randomInt = (max) => Math.ceil(Math.random() * max);

/**
 * min부터 max까지의 랜덤 정수 생성
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/* =======================
   Problem Generators
======================= */

const problemGenerators = {
  /**
   * 덧셈 (1~maxNum)
   */
  plus: (maxNum) => {
    const a = randomInt(maxNum);
    const b = randomInt(maxNum);
    return {
      display: `${a} + ${b}`,
      correct: a + b,
    };
  },

  /**
   * 뺄셈 (결과가 항상 양수)
   */
  minus: (maxNum) => {
    const b = randomInt(maxNum);
    const a = b + randomInt(maxNum); // a > b 보장
    return {
      display: `${a} - ${b}`,
      correct: a - b,
    };
  },

  /**
   * 곱셈 (1~maxNum)
   */
  multiple: (maxNum) => {
    const a = randomInt(maxNum);
    const b = randomInt(maxNum);
    return {
      display: `${a} × ${b}`,
      correct: a * b,
    };
  },

  /**
   * 나눗셈 (나누어떨어지는 문제만)
   */
  division: (maxNum) => {
    const a = randomInt(maxNum);
    const b = randomInt(maxNum);
    return {
      display: `${a * b} ÷ ${b}`,
      correct: a,
    };
  },

  /**
   * 소수 첫째 자리 덧셈
   */
  decimalFirstPlus: (maxNum) => {
    const a = randomInt(maxNum * 10) / 10;
    const b = randomInt(maxNum * 10) / 10;
    return {
      display: `${a.toFixed(1)} + ${b.toFixed(1)}`,
      correct: Number((a + b).toFixed(1)),
    };
  },

  /**
   * 소수 첫째 자리 뺄셈 (결과가 양수)
   */
  decimalFirstMinus: (maxNum) => {
    const b = randomInt(maxNum * 10) / 10;
    const a = b + randomInt(maxNum * 10) / 10; // a > b
    return {
      display: `${a.toFixed(1)} - ${b.toFixed(1)}`,
      correct: Number((a - b).toFixed(1)),
    };
  },

  /**
   * 소수 둘째 자리 덧셈
   */
  decimalSecondPlus: (maxNum) => {
    const a = randomInt(maxNum * 100) / 100;
    const b = randomInt(maxNum * 100) / 100;
    return {
      display: `${a.toFixed(2)} + ${b.toFixed(2)}`,
      correct: Number((a + b).toFixed(2)),
    };
  },

  /**
   * 소수 둘째 자리 뺄셈 (결과가 양수)
   */
  decimalSecondMinus: (maxNum) => {
    const b = randomInt(maxNum * 100) / 100;
    const a = b + randomInt(maxNum * 100) / 100; // a > b
    return {
      display: `${a.toFixed(2)} - ${b.toFixed(2)}`,
      correct: Number((a - b).toFixed(2)),
    };
  },

  /**
   * 분수 덧셈 (같은 분모)
   */
  fractionPlusSimple: (maxNum) => {
    const d = randomRange(2, 10); // 분모는 2~10
    const a = { n: randomInt(maxNum), d };
    const b = { n: randomInt(maxNum), d };

    return {
      display: { a, b, op: "+" },
      correct: addFraction(a, b),
    };
  },
};

/* =======================
   Main Generator Function
======================= */

/**
 * 문제 배열 생성
 * @param {string} type - 문제 유형
 * @param {number} maxNum - 최대 숫자 범위 (기본값: 9)
 * @param {number} count - 문제 개수 (기본값: 10)
 * @returns {Array} 문제 배열
 */
export const generateProblems = (type, maxNum = 9, count = 10) => {
  const generator = problemGenerators[type] || problemGenerators.plus;

  // 중복 방지를 위한 Set 사용
  const problems = [];
  const displaySet = new Set();
  let attempts = 0;
  const maxAttempts = count * 10; // 무한 루프 방지

  while (problems.length < count && attempts < maxAttempts) {
    attempts++;

    const { display, correct } = generator(maxNum);
    const displayStr =
      typeof display === "string" ? display : JSON.stringify(display);

    // 중복 체크
    if (!displaySet.has(displayStr)) {
      displaySet.add(displayStr);

      problems.push({
        id: `q${problems.length}`,
        display,
        correctAnswer: correct,
        userAnswer: type === "fractionPlusSimple" ? { n: "", d: "" } : "",
        isCorrect: null,
      });
    }
  }

  // 만약 충분한 문제를 생성하지 못했다면 경고
  if (problems.length < count) {
    console.warn(
      `Warning: Only ${problems.length}/${count} unique problems generated`
    );
  }

  return problems;
};

/**
 * 사용 가능한 문제 유형 목록
 */
export const PROBLEM_TYPES = {
  PLUS: "plus",
  MINUS: "minus",
  MULTIPLE: "multiple",
  DIVISION: "division",
  DECIMAL_FIRST_PLUS: "decimalFirstPlus",
  DECIMAL_FIRST_MINUS: "decimalFirstMinus",
  DECIMAL_SECOND_PLUS: "decimalSecondPlus",
  DECIMAL_SECOND_MINUS: "decimalSecondMinus",
  FRACTION_PLUS_SIMPLE: "fractionPlusSimple",
};

/**
 * 문제 유형별 설명
 */
export const PROBLEM_DESCRIPTIONS = {
  plus: "한 자리 수 덧셈",
  minus: "한 자리 수 뺄셈",
  multiple: "한 자리 수 곱셈",
  division: "한 자리 수 나눗셈",
  decimalFirstPlus: "소수 첫째 자리 덧셈",
  decimalFirstMinus: "소수 첫째 자리 뺄셈",
  decimalSecondPlus: "소수 둘째 자리 덧셈",
  decimalSecondMinus: "소수 둘째 자리 뺄셈",
  fractionPlusSimple: "같은 분모 분수 덧셈",
};
