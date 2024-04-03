// 아이템59 타입스크립트 도입 전에 @ts-check 와 jsDoc 으로 시험해보기

// @ts-check 지시자를 사용하면 타입스크립트 전환시에 어떤 문제가 발생하는지 미리 시험해볼 수 있다.

// @ts-check
const person = {first: 'aaa', last: 'bbbb'};
2 * person.first;

console.log(user.first);

// 선언되지 않는 전역 변수
// 알 수 없는 라이브러리
// DOM 문제
// 부정확한 JSDoc
// @ts-check + JSDoc

export const aaa = 10;


// @ts-check
/**
 * 
 * @param {number} num 
 * @returns 
 */
function double(num) {
    return 2 * num;
}

double('wdwdwdw');

export {};