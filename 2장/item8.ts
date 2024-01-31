
// 이름을 똑같이 하는 건 좀...
// 명명규칙을 정해서 하자
interface Cylinder {
    radius: number;
    height: number;
}

const Cylinder = (radius: number, height: number) => ({radius, height});

interface Person {
    first: string;
    last: string;
}

const p: Person = {first: 'Jane', last: 'Jacobs'};
const email = 'wdwdwdwdwdwdwd';

// typoof 
// 타입스크립트에서 사용하게 되면 타입스크립트에서의 타입을 반환
type T1 = typeof p;
type T2 = typeof email;

// 자바스크립트에서 사용하게 되면 런타임 시의 변수의 타입을 반환
const v1 = typeof p;
const v2 = typeof email;

export {};