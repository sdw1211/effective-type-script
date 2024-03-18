// 아이템41 any의 진화를 이해하기

function range(start: number, limit: number) {
    const out = [];         // any[]
    for (let i = start; i < limit; i++) {
        out.push(i);        // any[]
    }
    return out;             // number[]
}

const result = [];
result.push('a');
result;

result.push(1);
result;

let val;

if (Math.random() < 0.5) {
    val = /hello/;
    val;
} else {
    val = 12;
    val;
}

val;


let val2 = null;

try {
    somthingDagerous();
    val2 = 12;
    val2;
} catch(e) {
    console.warn('alas!');
}

val2;

// any 타입의 진화는 암시적 any 인 경우에만 일어난다.
// 명시적으로 any를 선언할 경우에는 그대로 유지가 된다.
let val3: any;
if (Math.random() < 0.5) {
    val3 = /hello/;
    val3;
} else {
    val3 = 12;
    val3;
}

function range2(start: number, limit: number) {
    const out = [];         // any[]
    if (start === limit) {
        return out;
    }
    for (let i = start; i < limit; i++) {
        out.push(i);        // any[]
    }
    return out;             // number[]
}

// any 타입의 진화는 암시적 any 타입에 어떤 값을 할당할 때만 발생
// 암시적 any 상태에서 값을 읽으려고 하면 오류가 발생한다.

// 암시적 any 타입은 함수 호출을 거쳐도 진화하지 않는다.
function makeSquares(start: number, limit: number) {
    const out = [];

    range(start, limit).forEach(i => {
        out.push(i);
    });

    return out;
}

// 타입을 안전하게 지키기 위해서는 암시적 any를 진화시키는 방식보다 명시적 타입 구문을 사용하는 것이 더 좋다.




