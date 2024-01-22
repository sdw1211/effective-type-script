// 타입스크립트에서 타입체커가 사전에 에러를 찾아주는 예
// 자바스크립트에서는 아래 경우 런타임 시에 에러를 찾아주기 떄문에 규모가 큰 프로젝트에서는 문제가 발생할 여지가 크다.

let city = 'seoul'; // 타입 추론을 통해서 city가 string 형태인지 알 수 있음


// 자바스크립트는 경우는 런타임 에러(해당 함수가 존재하지 않기 때문에 실행이 불가)
// 타입스크립트는 타입 체커에서 사전에 에러를 표시
console.log(city.toLowercase());    

const states = [{
    name: 'aaaa1', capital: 'bbbb1'
}, {
    name: 'aaaa2', capital: 'bbbb2'
}, {
    name: 'aaaa3', capital: 'bbbb3'
}];

// 자바스크립트는 경우는 정상적으로 실행(결과가 undefined로 나옴)
// 타입스크립트는 타입 체커에서 사전에 에러를 표시
for (const state of states) {
    console.log(state.capitol);
}


// 해당 경우는 데이터를 넣을 때 capitol 프로퍼티 명이 잘못되었지만 오류의 위치가 잘못된 상황
const states2 = [{
    name: 'aaaa1', capitol: 'bbbb1'
}, {
    name: 'aaaa2', capitol: 'bbbb2'
}, {
    name: 'aaaa3', capitol: 'bbbb3'
}];


for (const state of states2) {
    console.log(state.capital);
}


// 타입 구문을 추가함으로써 좀 더 명확한 오류 판별 가능
type State = {
    name: string;
    capital: string;
}


const states3: State[] = [{
    name: 'aaaa1', capitol: 'bbbb1'
}, {
    name: 'aaaa2', capitol: 'bbbb2'
}, {
    name: 'aaaa3', capitol: 'bbbb3'
}];

for (const state of states3) {
    console.log(state.capital);
}

// 타입스크립트와 자바스크립트 둘 다 동작함.
const x = 2 + '3'; // 문자열 23
const y = '2' + 3; // 문자열 23

// 타입스크립트에서 에러 자바스크립트에서는 정상적으로 동작하는 경우
// 자바스크립트 동작: https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-applystringornumericbinaryoperator
// https://v8.dev/blog/understanding-ecmascript-part-1
const a = null + 2; // 2 : null 이 0으로 변경
const b= [] + 12;   // 문자열 12 : [].toString() 이 '' --> '' + 12

// 다 에러가 나오던지. 다 되던지 해야 하지 않을까?

// 타입스크립트에서 에러를 찾지 못하는 경우
const names = ['111','2222'];

console.log(names[3].toLowerCase());    //3번 째 배열 값이 없기 때문에 undefined 가 나오지 때문에 에러


export {};

