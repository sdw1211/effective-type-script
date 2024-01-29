interface Person {name: string};

const alice: Person = {name: 'Alice'};  // 타입 선언
const bob= {name: 'bob'} as Person;    // 타입 단언

// 타입 선언을 써야하는 이유
const alice2: Person = {};  
const bob2 = {} as Person;    // 잘못된 형태이지만 에러 무시

const people1 = ['alice', 'bob', 'jan'].map(name => ({name}));

const people2 = ['alice', 'bob', 'jan'].map(name => ({name}) as Person);
const people3 = ['alice', 'bob', 'jan'].map(name => ({}) as Person);        // 이렇게 해도 에러 무시

const people4 = ['alice', 'bob', 'jan'].map(name => {
    const person: Person = {name};      // 타입 선언
    return person;
});

const people5 = ['alice', 'bob', 'jan'].map((name): Person => ({name}));

() => {}
(): string => {return '111'}

function aaa(name: string): Person {return {name}}

// 타입 단언이 필요한 경우

const element = document.querySelector('#myButton')?.addEventListener('click', e => {
    const target = e.target as EventTarget;
    target.click();

    
    const button = target as HTMLButtonElement;

    button.click();
});

// 타입 단언문으로 임의의 타입 간에 변환을 할 수 없습니다. A가 B의 부분 집합인 경우에 타입 단언문을 사용해 변환할 수 있습니다.
const body = document.body;

const el = body as Person;

export {};