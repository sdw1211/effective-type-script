// 자바스크립트에서 함수 구현
function a1(a: number): number { return a; } // 문장
const a2 = (a: number): number => a;  // 표현식

type T1 = (sides: number) => number;
const a3: T1 = sides => sides + 1;


// 코드의 반복을 줄인다?

function add(a: number, b: number) { return a + b; }
function sub(a: number, b: number) { return a - b; }
function mul(a: number, b: number) { return a * b; }
function div(a: number, b: number) { return a / b; }

type T2 = (a:number, b:number) => number;
const add1: T2 = (a, b) => a + b;
const sub1: T2 = (a, b) => a - b;
const mul1: T2 = (a, b) => a * b;
const div1: T2 = (a, b) => a / b;

const responseP = fetch('/aaaa');

async function getQuote() {
    const response = await fetch('b');

    // b라는 주소에 없는 주소라면 404에러 발생
    // 응답이 json이 아닐 수도 있기 때문에 에러 발생의 여지가 있다.
    // 이럴 경우 json 파싱 에러가 실제 response의 에러가 감춰지는 상황이 발생할 수 있음
    // 에러 발생 시 방어할 수 있는 로직이 필요
    const quote = await response.json(); 
    return quote;
}

async function checkedFetch(input: RequestInfo | URL, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
        return new Error(`Request failed: ${response.status}`);
    }
    return response;
}

// 이런 형태로 간결하게 만들 수 있다.
// 간결성과 안정성 2가지를 다 잡을 수 있다.
// 이렇게 보니깐 또 괜찮네..
const checkedFetch2: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return response;
}


export {};