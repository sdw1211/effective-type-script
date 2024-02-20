type Vector3 = {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
    return vector[axis];
}

let x = 'x';
let vec = {x:10, y:20, z:30};

// x는 변환이 가능한 let으로 선언이 되었기 때문에 x의 타입은 string으로 넗히기가 됨
getComponent(vec, x);

// 타입스크립트는 최대한의 형태로 추론
// 튜플인지 배열인지 알 수 없음
const mixed = ['x', 1];

// 자바스크립트는 되지만 타입스크립트는 안된다.
let x2 = 'x';
x2 = /x|y|z/;
x2 = ['x', 'y', 'z'];

// 넓히기는 제어하는 방법

// const는 재할당이 안되기 때문에 리터럴 'x'로 타입이 설정
const x3 = 'x';

getComponent(vec, x3);

const v = {
    x: 1,
}

v.x = 3;
v.y = 4;
v.name = '232323';

// 타입의 추론 강도를 직접 제어하려면 타입스크립트의 기본 동작을 재정의
// 첫 번째, 명시적 타입 구문을 제공

const v3: {x: 1|3|5} = {
    x:1
};

// 두 번째, 타입 체커에 추가적인 문맥을 재공하는 것(아이템 26에서 ..)
// 세 번째, const 단언문 사용

const v4 = {
    x: 1 as const,
    y: 2
};

const v5 = {
    x: 1,
    y: 2
} as const;

export {};