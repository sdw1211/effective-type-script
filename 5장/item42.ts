// 아이템42 모르는 타입의 값에는 any 대신 unknown을 사용하기

// unknown에는 함수의 반환값과 관련된 형태, 변수 선언과 관련된 형태, 단언문과 관련된 형태가 있다.

function parseYAML(yaml: string): any {

}

// 결과를 any로 하는 것은 좋지않다.

type Book = {
    name: string;
    author: string;
};

const book: Book = parseYAML(`
    name: efefefefef
    author: 23232rdewfefewf
`);

// 타입선언을 빼먹었을 경우
const book2 = parseYAML(`
    name: efefefefef
    author: 23232rdewfefewf
`);

book2.title;
book2('read');

function safeParseYAML(yaml: string): unknown {
    return parseYAML(yaml);
}

// any는 문제점
// 어떠한 타입이든 any 타입에 할당 가능
// any 타입은 어떠한 타입으로도 할당 가능

// unkown 
// 어떠한 타입이든 any 타입에 할당 가능
// unkown 타입은 어떠한 타입으로도 할당 불가능


const book3 = safeParseYAML(`
    name: efefefefef
    author: 23232rdewfefewf
`);

book3.title;
book3('read');

interface Feature {
    id?: string | number;
    geometry: [number, number];
    properties: unknown;
}

function processValue(val: unknown) {
    if (val instanceof Date) {
        val;
    }
}

function isBook(val: unknown): val is Book {
    return (
        typeof(val) === 'object' && val !== null && 'name' in val && 'author' in val
    );
}

function processValue(val: unknown) {
    if (isBook(val)) {
        val;
    }
}

// 이것보다는 unknown으로 선언 후 타입을 좁히는 것이 좋다.
function safeParseYAML2<T>(yaml: string): T {
    return parseYAML(yaml);
}


declare const foo: Foo;
let barAny = foo as any as Bar;
let barUnk = foo as unknown as Bar;

// {}는 null과 undefined를 제외한 모든 값을 포함


export {};
