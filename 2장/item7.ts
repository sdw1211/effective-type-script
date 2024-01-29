// never 형식은 값을 가질 수 없다.(공집합)
const x: never = 12;

// 유닛 타입, 리터럴 타입(하나만 가지는 경우)
type A = 'A';
type B = 'B';
type Twelve = 12;

// A만 할당 가능
const a: A = 'a';

// union 을 활용해서 여러 개로 묶을 수 있음(합집합)
type AB = A | B;
type AB12 = A | B | Twelve;

// A,B만 가능
const ab: AB = 'c';

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonUnion = Person | Lifespan;

const personUnion: PersonUnion = {
    name: 'wdwdwdwd',
    birth: new Date(),
}

personUnion


// & 연산은 교집합에 사용
type PersonSpan = Person & Lifespan;

// 타입 연산자는 인터페이스의 속성이 아닌, 값의 집합에 적용됩니다.
// 추가적인 속성을 가지는 값도 여전히 그 타입에 속합니다.
// 둘 다 가지는 값은 인터섹션 타입에 속하게 됩니다.
const ps: PersonSpan = {
    name: 'wdwdw',
    birth: new Date('1980/11/26')
};


const person: Person = {
    name: 'wdwdw',
};


const test = (p: Person) => {
    console.log(p.name);
}

const test2 = (l: Lifespan) => {
    console.log(l.birth);
    console.log(l.death);
}

test(ps);
test2(ps);
test(person);


type K = keyof (Person | Lifespan);
type K2 = keyof (Person & Lifespan);
type k3 = keyof Lifespan;

interface Person {
    name: string;
}

// extends의 ~의 부분집합이라는 의미로 사용
interface PersonSpan2 extends Person {
    birth: Date;
    death?: Date;
}

interface Vector1D {x: number;}
interface Vector2D extends Vector1D {y: number;}
interface Vector3D extends Vector2D {z: number;}


type Point = {
    x: number;
    y: number;
}

type Pointkeys = keyof Point;
function sortBy<Key extends keyof T, T>(vals: T[], key: Key): T[] {
    //
}

const pts: Point[] = [{x:1, y:1}, {x:2, y:2}];
sortBy(pts, 'x');
sortBy(pts, 'y');

sortBy(pts, 'z');

const list = [1,2];
const tuple: [number, number] = list;

export {};