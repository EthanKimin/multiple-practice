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
  const sn = n / g;
  const sd = d / g;
  // 분모는 항상 양수로 정규화 (부호는 분자로)
  return sd < 0 ? { n: -sn, d: -sd } : { n: sn, d: sd };
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
   * 정수의 덧셈 (-maxNum ~ +maxNum, 0 포함)
   */
  integerPlus: (maxNum) => {
    const sign = (n) => (n >= 0 ? `(+${n})` : `(${n})`);
    const a = randomRange(-maxNum, maxNum);
    const b = randomRange(-maxNum, maxNum);
    return {
      display: `${sign(a)} + ${sign(b)}`,
      correct: a + b,
    };
  },

  /**
   * 정수의 뺄셈 (-maxNum ~ +maxNum, 0 포함)
   */
  integerMinus: (maxNum) => {
    const sign = (n) => (n >= 0 ? `(+${n})` : `(${n})`);
    const a = randomRange(-maxNum, maxNum);
    const b = randomRange(-maxNum, maxNum);
    return {
      display: `${sign(a)} - ${sign(b)}`,
      correct: a - b,
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
   * 유리수 덧셈: (±a/b) + (±c/d)
   */
  rationalPlus: (maxNum) => {
    const sign = () => (Math.random() < 0.5 ? 1 : -1);
    const d1 = randomRange(2, maxNum);
    const d2 = randomRange(2, maxNum);
    const a = { n: sign() * randomInt(maxNum), d: d1 };
    const b = { n: sign() * randomInt(maxNum), d: d2 };
    return {
      display: { a, b, op: "+" },
      correct: addFraction(a, b),
    };
  },

  /**
   * 유리수 뺄셈: (±a/b) - (±c/d)
   */
  rationalMinus: (maxNum) => {
    const sign = () => (Math.random() < 0.5 ? 1 : -1);
    const d1 = randomRange(2, maxNum);
    const d2 = randomRange(2, maxNum);
    const a = { n: sign() * randomInt(maxNum), d: d1 };
    const b = { n: sign() * randomInt(maxNum), d: d2 };
    return {
      display: { a, b, op: "-" },
      correct: subFraction(a, b),
    };
  },

  /**
   * 유리수 곱셈: (±a/b) × (±c/d)
   */
  rationalMultiple: (maxNum) => {
    const sign = () => (Math.random() < 0.5 ? 1 : -1);
    const a = { n: sign() * randomInt(maxNum), d: randomRange(2, maxNum) };
    const b = { n: sign() * randomInt(maxNum), d: randomRange(2, maxNum) };
    return {
      display: { a, b, op: "×" },
      correct: simplify({ n: a.n * b.n, d: a.d * b.d }),
    };
  },

  /**
   * 유리수 나눗셈: (±a/b) ÷ (±c/d) → (±a/b) × (±d/c)
   */
  rationalDivision: (maxNum) => {
    const sign = () => (Math.random() < 0.5 ? 1 : -1);
    const a = { n: sign() * randomInt(maxNum), d: randomRange(2, maxNum) };
    const b = { n: sign() * randomInt(maxNum), d: randomRange(2, maxNum) };
    return {
      display: { a, b, op: "÷" },
      correct: simplify({ n: a.n * b.d, d: a.d * b.n }),
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

  /**
   * 평균: 정수 데이터 5개, 평균이 소수 첫째 자리 이하로 나오도록
   */
  statAverage: (maxNum) => {
    const count = 5;
    const data = Array.from({ length: count }, () => randomInt(maxNum));
    const sum = data.reduce((s, v) => s + v, 0);
    const avg = Number((sum / count).toFixed(1));
    const dataStr = data.join(", ");
    return {
      display: `자료: ${dataStr}\n이 자료의 평균을 구하세요.`,
      correct: avg,
    };
  },

  /**
   * 중앙값: 홀수 개(5개) 정수 데이터, 정렬 후 중간값
   */
  statMedian: (maxNum) => {
    const count = 5;
    const data = Array.from({ length: count }, () => randomInt(maxNum));
    const sorted = [...data].sort((a, b) => a - b);
    const median = sorted[Math.floor(count / 2)];
    const dataStr = data.join(", ");
    return {
      display: `자료: ${dataStr}\n이 자료의 중앙값을 구하세요.`,
      correct: median,
    };
  },

  /**
   * 최빈값: 명확한 최빈값이 하나인 데이터 생성
   */
  statMode: (maxNum) => {
    const mode = randomInt(maxNum);
    // 최빈값을 2번 포함, 나머지 3개는 mode와 다른 값
    const others = [];
    while (others.length < 3) {
      const v = randomInt(maxNum);
      if (v !== mode && !others.includes(v)) others.push(v);
    }
    const data = [mode, mode, ...others].sort(() => Math.random() - 0.5);
    const dataStr = data.join(", ");
    return {
      display: `자료: ${dataStr}\n이 자료의 최빈값을 구하세요.`,
      correct: mode,
    };
  },

  /**
   * 범위: 최댓값 - 최솟값
   */
  statRange: (maxNum) => {
    const count = 5;
    const data = Array.from({ length: count }, () => randomInt(maxNum));
    const range = Math.max(...data) - Math.min(...data);
    const dataStr = data.join(", ");
    return {
      display: `자료: ${dataStr}\n이 자료의 범위를 구하세요.`,
      correct: range,
    };
  },

  /**
   * 분배법칙 전개: a(x + b) = ax + ab  (계수 1 고정)
   */
  distributiveSimple: (maxNum) => {
    const a = randomRange(-maxNum, maxNum) || 1; // 0 방지
    const b = randomRange(-maxNum, maxNum);
    const aStr = a === 1 ? "" : a === -1 ? "-" : `${a}`;
    const inner = b >= 0 ? `x + ${b}` : `x - ${Math.abs(b)}`;
    return {
      display: `${aStr}(${inner})`,
      correct: { coeff: a, const: a * b },
    };
  },

  /**
   * 분배법칙 전개: a(bx + c) = abx + ac  (계수 포함)
   */
  distributiveCoeff: (maxNum) => {
    const a = randomRange(-maxNum, maxNum) || 1;
    const b = randomRange(2, maxNum); // b >= 2 (항상 계수 있음)
    const c = randomRange(-maxNum, maxNum);
    const inner = c >= 0 ? `${b}x + ${c}` : `${b}x - ${Math.abs(c)}`;
    return {
      display: `${a}(${inner})`,
      correct: { coeff: a * b, const: a * c },
    };
  },

  /**
   * 분배법칙 역: (abx + ac) ÷ a = bx + c  (다항식 ÷ 단항식)
   */
  distributiveDivide: (maxNum) => {
    const a = randomRange(2, maxNum); // 양수로만 나누기
    const b = randomRange(1, maxNum);
    const c = randomRange(-maxNum, maxNum);
    const ab = a * b;
    const ac = a * c;
    const inner = ac >= 0 ? `${ab}x + ${ac}` : `${ab}x - ${Math.abs(ac)}`;
    return {
      display: `(${inner}) ÷ ${a}`,
      correct: { coeff: b, const: c },
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

const INTEGER_TYPES = new Set(["integerPlus", "integerMinus"]);

/**
 * 정수 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isIntegerType = (type) => INTEGER_TYPES.has(type);

const RATIONAL_TYPES = new Set([
  "rationalPlus",
  "rationalMinus",
  "rationalMultiple",
  "rationalDivision",
]);

/**
 * 유리수 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isRationalType = (type) => RATIONAL_TYPES.has(type);

const ALGEBRA_TYPES = new Set([
  "distributiveSimple",
  "distributiveCoeff",
  "distributiveDivide",
]);

/**
 * 대수식(분배법칙) 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isAlgebraType = (type) => ALGEBRA_TYPES.has(type);

const STATISTICS_TYPES = new Set([
  "statAverage",
  "statMedian",
  "statMode",
  "statRange",
]);

/**
 * 통계 문제 유형 여부 확인
 * @param {string} type
 * @returns {boolean}
 */
export const isStatisticsType = (type) => STATISTICS_TYPES.has(type);

/**
 * 대수식 정답 비교: { coeff, const } 두 값이 모두 일치하는지 확인
 */
export const isCorrectAlgebra = (userAnswer, correctAnswer) => {
  const coeff = parseInt(userAnswer?.coeff, 10);
  const konst = parseInt(userAnswer?.const, 10);
  return (
    !isNaN(coeff) &&
    !isNaN(konst) &&
    coeff === correctAnswer.coeff &&
    konst === correctAnswer.const
  );
};

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
        userAnswer: isAlgebraType(type)
          ? { coeff: "", const: "" }
          : (isFractionType(type) || isRationalType(type))
            ? { n: "", d: "" }
            : "",
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
  INTEGER_PLUS: "integerPlus",
  INTEGER_MINUS: "integerMinus",
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
  RATIONAL_PLUS: "rationalPlus",
  RATIONAL_MINUS: "rationalMinus",
  RATIONAL_MULTIPLE: "rationalMultiple",
  RATIONAL_DIVISION: "rationalDivision",
  DISTRIBUTIVE_SIMPLE: "distributiveSimple",
  DISTRIBUTIVE_COEFF: "distributiveCoeff",
  DISTRIBUTIVE_DIVIDE: "distributiveDivide",
  STAT_AVERAGE: "statAverage",
  STAT_MEDIAN: "statMedian",
  STAT_MODE: "statMode",
  STAT_RANGE: "statRange",
};

/**
 * 문제 유형별 설명
 */
export const PROBLEM_DESCRIPTIONS = {
  plus: "한 자리 수 덧셈",
  minus: "한 자리 수 뺄셈",
  integerPlus: "정수의 덧셈",
  integerMinus: "정수의 뺄셈",
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
  statAverage: "평균 구하기",
  statMedian: "중앙값 구하기",
  statMode: "최빈값 구하기",
  statRange: "범위 구하기",
  distributiveSimple: "단항식과 다항식의 곱 (계수 1)",
  distributiveCoeff: "단항식과 다항식의 곱 (계수 포함)",
  distributiveDivide: "다항식 ÷ 단항식",
  rationalPlus: "유리수의 덧셈",
  rationalMinus: "유리수의 뺄셈",
  rationalMultiple: "유리수의 곱셈",
  rationalDivision: "유리수의 나눗셈",
};
