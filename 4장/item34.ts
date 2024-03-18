// 아이템34 부정확한 타입보다는 미완성 타입을 사용하기

// 타입 선언을 작성하다 보면 코드의 동작을 더 구체적으로 또는 덜 구체적으로 모델링하게 되는 상황을 맞닥뜨리게 된다.
// 타입이 구체적일수록 버그를 더 많이 잡고 타입스크립트가 제공하는 도구를 활용할 수 있다.
// 타입을 구체적으로 만드는 것은 실수하가 발생하기 쉽고 잘못된 타입으로 될 가능성이 크기 때문에 주의를 기울여서 만들어야 한다.

type Point = {
    type: 'point';
    coordinates: number[];
    // 해당 값을 위도, 경로를 나타내기 때문에 number[] 보다는 좀 더 구체적인 [number, number] 로 변경
    // coordinates: [number, number];
    // 너무 구체적으로 변경(3번 째 값에 고도가 올 수 있음)
}

type LineString = {
    type: 'LineString';
    coordinates: number[][];
}

type Polygon = {
    type: 'Polygon';
    coordinates: number[][][];
}

type Geometry = Point | LineString | Polygon;

// 이런 값들을 지원하는 타입을 만든다고 가정할 때
const value = [
    12,
    'dddd',
    ['+', 1, 2],
    ['/', 20, 2],
    ['case', ['>', 20, 10], 'red', 'blue'],
    ['rgb', 255, 0, 127]
];

// 1. 모두 허용
type Expression1 = any;
const test: Expression1 = [
    12,
    'dddd',
    ['+', 1, 2],
    ['/', 20, 2],
    ['case', ['>', 20, 10], 'red', 'blue'],
    ['rgb', 255, 0, 127],
    true
];
// 2. 문자열, 숫자, 배열 허용
type Expression2 = number | string | any[];
const test2: Expression2[] = [
    12,
    'dddd',
    ['+', 1, 2],
    ['/', 20, 2],
    ['case', ['>', 20, 10], 'red', 'blue'],
    ['rgb', 255, 0, 127],
    [],
];

// 3. 문자열, 숫자, 알려진 함수 이름으로 시작하는 배열 허용
type FnName = '+' | '-' | '*' | '/' | '>' | '<' | 'case' | 'rgb';
type CallExpression = [FnName, ...any[]];
type Expression3 = number | string | CallExpression;
const test3: Expression3[] = [
    12,
    'dddd',
    ['+', 1, 2],
    ['/', 20, 2],
    ['case', ['>', 20, 10], 'red', 'blue'],
    ['rgb', 255, 0, 127],
    ['+'],
    ['**'],
];

// 4. 각 함수가 받는 매개변수의 개수가 정확한지 확인
type Expression4 = number | string | CallExpressio2;
type CallExpressio2 = MathCall | CaseCall | RGBCall;
type MathCall = {
    0: '+' | '-' | '/' | '*' | '>' | '<';
    1: Expression4;
    2: Expression4;
    length: 3;
};

type CaseCall = {
    0: 'case';
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4 | 6 | 8 | 10 | 12 | 14 | 16;
};

type RGBCall = {
    0: 'rgb';
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4;
};

const test4: Expression4[] = [
    12,
    'dddd',
    ['+', 1, 2],
    ['/', 20, 2],
    ['case', ['>', 20, 10], 'red', 'blue'],
    ['case', ['>', 20, 10], 'red', 'blue', 'wdwdwd'],
    ['rgb', 255, 0, 127],
    ['rgb', 255, 0, 127,23232],
    ['**', 2, 31],
];

// 책에서는 오류 메세지가 엉뚱한 메시지를 출력한다고 되어 있는데, 제대로 나오는 것을 확인
// 자동완성은 이정도까지 해야 제대로 나오는 듯
// 너무 복잡하긴 하다.

const test5: Expression4[] = [
    ['-', 12],
    ['+', 1, 2, 3],
    ['*', 2, 3, 4]
];

// 타입 안정성에서 불쾌한 골짜기는 피해야 합니다. 타입이 없는 것보다 잘못된 게 더 나쁘다.
// 정확하게 타입을 모델링할 수 없다면, 부정확하게 모델링하지 말아야 한다. 또한 any와 unknown을 구별해서 사용하자.
// 타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 한다.



// 5. 각 함수가 받는 매개변수의 타입이 정확한지 확인


export {};