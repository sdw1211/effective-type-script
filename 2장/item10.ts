// string 기본형은 메소드를 가지고 있지 않다.
// at이라는 메소드를 사용하기 위해서 런타임 시에 string 기본형은 String 이라는 래핑객체로 래핑이 됨
// String 이라는 래핑객체의 at 메소드를 사용하는 구조
// 바로 버려집니다.
'adwdwdwdwdw'.at(0);

// 값타입과 참조타입의 차이
// 참조타입의 경우는 동일한 객체인지를 판단
// new 라는 키워드를 사용하여 객체를 생성할 경우 서로 다른 객체가 생성
// 그래서 다 false
'hello' === new String('hello') // false
new String('hello') === new String('hello') // false

const x = 'hello';

// 속성을 넣었지만
x.language = 'English'
// 래핑 후 바로 버려지기 때문에 해당 객체는 삭제
// 이렇게 쓰는게 잘못
x.language

function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('wdwddw');
getStringLen(new String('wdwdwd'));

function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase);
}

// 런타입 시에는 전부 기본형으로 된다. 실제랑 맞지 않는 타입을 선언하게 되는 예제
const s: String = 'wddwwd';
const n: Number = 2323;
const b: Boolean = true;





export {};