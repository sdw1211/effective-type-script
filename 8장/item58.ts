// 아이템 58 모던 자바스크립크 작성하기

// 타입스크립트의 기능 중 하나는 자바스크립트 트렌스파일러

// CommonJS
const b = require('./b');
console.log(b.name);

module.exports = {};

// ECMAScript module

import * as a from './b';
console.log(b.name);

export default 100;
export const aaaa = 'dwwdwd';


// 프로토타입 대신 클래스
// 저는 둘 다 잘 안써서..

// 그냥도 가능 원하지 않는 결과가 나올 수 있음
// 방어 로직이 필요(굳이...)
function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.getName = function() {
    return this.first + this.last;
}

const p1 = new Person('aaa', 'bbb');

p1.getName();

class Person2 {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    getName() {
        return this.first + this.last;
    }
}

const p2 = new Person2('aaa', 'bbb');

p2.getName();

// var 대신 let/const
// for(;;) 대신 for-of
// 함수표현식 화살표 함수
// this 때문에..

class Foo {
    method() {
        console.log(this);
        [1,2].forEach(function(i) {
            console.log(this);
        })
    }
}

const f = new Foo();
f.method();

const aaa = f.method;

aaa();


class Foo2 {
    method() {
        console.log(this);
        [1,2].forEach(() => console.log(this));
    }
}

f.method();

// 단축 객체 표현과 구조 분해 할당 사용
const x=1, y=2, z=3;
const pt = {
    x,y,z
};

const {x:x2,y:y2,z:z2} = pt;

// 매개변수 기본 값 사용하기
// 프라미스보다는 asyn/await 사용하기
// 배열 객체 대신 Map, Set 사용하기

// Map vs object

// 타입스크립트에 use strict 넣지 않기
// 타입스크립트는 이미 더 엄격한 안정성 검사를 진행하기 때문에 굳이 필요 없다.

export {};