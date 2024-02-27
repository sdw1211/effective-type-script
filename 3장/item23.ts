// 이런식으로 하면 타입스크립트에서 타입을 추론을 제대로 하지 못한다.
// pt는 속성이 없는 객체로 타입을 추론함
const pt = {};
// 타입 스크립트에서는 에러
pt.x = 3;
pt.y = 4;

// 에러를 나지 않게 하는 방법
// 인터페이스나 타입을 만든다.
type Point = {
    x: number;
    y: number;
}

const pt2: Point = {};
// 타입 단언문을 사용해서 타입 체커를 통과하게 할 수 있지만 될 수 있으면 쓰지 말자
const pt4 = {} as Point;

pt4.x = 3;
pt4.y = 4;


// 객체를 정의할 떄 같이 만들어준다.
const pt3 = {
    x: 10,
    y: 20
};

pt3.x = 3;
pt3.y = 4;

// 작은 객체를 조합해서 큰 객체를 생성할 때도 

const pt5 = {x: 2, y: 4};
const id = {name: 'dwdwdw'};

// 타입 체커에서 이미 속성이 없는 객체로 판단
const namePoint = {};
Object.assign(namePoint, pt, id);

// 타입스크립트에서는 에러
namePoint.name;

// 객체 전개 연산자(Object spread Operation)을 사용하면 한번에 생성할 수 있다.
const namePoint2 = {...pt5, ...id};
namePoint2.name;

const p0 = {};
const p1 = {...p0, x:3};
const p2:Point = {...p1, y:10};


declare let hasMiddle: boolean;
const firstLast = {first: 'wwww', last: 'bbbbb'};
const persident = {...firstLast, ...(hasMiddle ? {middle: 'wdwdwdw'} : {}) }

function addOptional<T extends object, U extends object>(a: T, b: U | undefined): T & Partial<U> {
    return {...a, ...b};
}

export {};