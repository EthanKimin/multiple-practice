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
 * 분수 뺄셈
 * @param {Object} a - { n: 분자, d: 분모 }
 * @param {Object} b - { n: 분자, d: 분모 }
 * @returns {Object} 결과 분수
 */
const subFraction = (a, b) =>
  simplify({
    n: a.n * b.d - b.n * a.d,
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
    const d = randomRange(2, 10);
    const a = { n: randomInt(maxNum), d };
    const b = { n: randomInt(maxNum), d };
    return {
      display: { a, b, op: "+" },
      correct: addFraction(a, b),
    };
  },

  /**
   * 분수 뺄셈 (같은 분모, 결과 양수 보장)
   */
  fractionMinusSimple: (maxNum) => {
    const d = randomRange(2, 10);
    const b = randomInt(maxNum);
    const a = b + randomInt(maxNum); // a > b 보장
    return {
      display: { a: { n: a, d }, b: { n: b, d }, op: "-" },
      correct: simplify({ n: a - b, d }),
    };
  },

  /**
   * 분수 덧셈 (다른 분모)
   */
  fractionPlusDiff: (maxNum) => {
    const d1 = randomRange(2, 6);
    let d2 = randomRange(2, 6);
    while (d2 === d1) d2 = randomRange(2, 6);
    const a = { n: randomInt(maxNum), d: d1 };
    const b = { n: randomInt(maxNum), d: d2 };
    return {
      display: { a, b, op: "+" },
      correct: addFraction(a, b),
    };
  },

  /**
   * 분수 뺄셈 (다른 분모, 결과 양수 보장)
   */
  fractionMinusDiff: (maxNum) => {
    const d1 = randomRange(2, 6);
    let d2 = randomRange(2, 6);
    while (d2 === d1) d2 = randomRange(2, 6);
    let a = { n: randomInt(maxNum), d: d1 };
    let b = { n: randomInt(maxNum), d: d2 };
    // a/d1 >= b/d2 보장 (교차 곱셈으로 비교)
    if (a.n * b.d < b.n * a.d) {
      [a, b] = [b, a];
    }
    return {
      display: { a, b, op: "-" },
      correct: subFraction(a, b),
    };
  },

  /**
   * 직사각형 넓이: 가로 × 세로
   */
  rectArea: (maxNum) => {
    const a = randomInt(maxNum);
    const b = randomInt(maxNum);
    return {
      display: `가로 ${a}, 세로 ${b}인 직사각형의 넓이`,
      correct: a * b,
    };
  },

  /**
   * 삼각형 넓이: 밑변 × 높이 / 2 (정수 결과 보장)
   */
  triangleArea: (maxNum) => {
    const base = randomInt(maxNum) * 2; // 짝수 보장
    const h = randomInt(maxNum);
    return {
      display: `밑변 ${base}, 높이 ${h}인 삼각형의 넓이`,
      correct: (base * h) / 2,
    };
  },

  /**
   * 평행사변형 넓이: 밑변 × 높이
   */
  parallelogramArea: (maxNum) => {
    const base = randomInt(maxNum);
    const h = randomInt(maxNum);
    return {
      display: `밑변 ${base}, 높이 ${h}인 평행사변형의 넓이`,
      correct: base * h,
    };
  },

  /**
   * 사다리꼴 넓이: (윗변 + 아랫변) × 높이 / 2 (정수 결과 보장)
   */
  trapezoidArea: (maxNum) => {
    const top = randomInt(maxNum);
    const bottom = randomInt(maxNum);
    const h = randomInt(maxNum) * 2; // 짝수 보장
    return {
      display: `윗변 ${top}, 아랫변 ${bottom}, 높이 ${h}인 사다리꼴의 넓이`,
      correct: ((top + bottom) * h) / 2,
    };
  },

  /**
   * 직사각형 둘레: 2 × (가로 + 세로)
   */
  rectPerimeter: (maxNum) => {
    const a = randomInt(maxNum);
    const b = randomInt(maxNum);
    return {
      display: `가로 ${a}, 세로 ${b}인 직사각형의 둘레`,
      correct: 2 * (a + b),
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
const GEOMETRY_TYPES = new Set([
  "rectArea",
  "triangleArea",
  "parallelogramArea",
  "trapezoidArea",
  "rectPerimeter",
]);

/**
 * 도형 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isGeometryType = (type) => GEOMETRY_TYPES.has(type);

const FRACTION_TYPES = new Set([
  "fractionPlusSimple",
  "fractionMinusSimple",
  "fractionPlusDiff",
  "fractionMinusDiff",
]);

/**
 * 분수 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isFractionType = (type) => FRACTION_TYPES.has(type);

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
        userAnswer: isFractionType(type) ? { n: "", d: "" } : "",
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
  FRACTION_MINUS_SIMPLE: "fractionMinusSimple",
  FRACTION_PLUS_DIFF: "fractionPlusDiff",
  FRACTION_MINUS_DIFF: "fractionMinusDiff",
  RECT_AREA: "rectArea",
  TRIANGLE_AREA: "triangleArea",
  PARALLELOGRAM_AREA: "parallelogramArea",
  TRAPEZOID_AREA: "trapezoidArea",
  RECT_PERIMETER: "rectPerimeter",
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
  fractionMinusSimple: "같은 분모 분수 뺄셈",
  fractionPlusDiff: "다른 분모 분수 덧셈",
  fractionMinusDiff: "다른 분모 분수 뺄셈",
  rectArea: "직사각형의 넓이",
  triangleArea: "삼각형의 넓이",
  parallelogramArea: "평행사변형의 넓이",
  trapezoidArea: "사다리꼴의 넓이",
  rectPerimeter: "직사각형의 둘레",
};
