// 아이템43 몽키 패키보다는 안전한 타입을 사용하기

// 자바스크립트의 가장 유명한 특징 중 하나는 객체와 클래스에 임의의 속성을 추가할 수 있을 만큼 유연하다는 것
window.monkey = 'AAAAA';
document.monkey = 'BBBBBBB';

const el = document.getElementById('aaa');
el.home = 'efefe';

// 객체에 임의의 속성을 추가하는 것은 일반적으로 좋은 설계가 아니다.
// 타입스크립트에서는 위와 같은 경우가 에러이기 때문에 any 단언문을 사용한다.

// 분리하는 것이 가장 좋지만 그럴 수 없는 경우
// 인터페이스 보강


// declare global {
//     interface Document {
//         monkey: string;
//     }
// }

// 보강이 any보다 나은 점
// 타입이 더 안전하다.
// 속성에 주석을 붙일 수 있다.
// 속성에 자동완성을 사용할 수 있다.
// 몽키 패치가 어떤 부분에 적용되었는지 정확하게 기록이 남는다.
// 보강의 모듈 영역 문제를 이해해야 한다.


interface MokeyDocument extends Document {
    monkey: string;
}

(document as MokeyDocument).monkey;




export {};