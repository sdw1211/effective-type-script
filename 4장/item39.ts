// 아이템39 any를 구체적으로 변형해서 사용하기

// any 자바스크립트에서 표현할 수 있는 모든 값을 아우르는 매우 큰 범위의 타입
// any를 사용하는 것보다 더 구체적인 타입을 찾아 타입 안전성을 높이도록 노력하자

// 배열인 경우
// bad
function getLengthBad(array: any) {
    return array.length;

}

getLengthBad(1111);


// good
function getLengthGood(array: any[]) {
    return array.length;
}

getLengthGood(1111);


// 함수 내의 array.length 타입이 체크
// 함수의 반환 타입이 any 대신 number 로 추론
// 함수 호출될 때 매개변수가 배열인지 체크

// 객체인 경우
// bad
function hasTweleveLetterKey(o: any) {
    for (const key in o) {
        if(key.length == 12) {
            console.log(key, o[key]);
            return true;
        }
    }
    return false;
}

function hasTweleveLetterKey2(o: {[key: string]: any}) {
    for (const key in o) {
        if(key.length == 12) {
            console.log(key, o[key]);
            return true;
        }
    }
    return false;
}

// 함수의 경우

type FnAny = any;

type Fn0 = () => any;
type Fn1 = (a: any) => any;
type Fn2 = (a: any, b: any) => any;

const numArgsBad = (...args: any) => args.length;
const numArgsGood = (...args: any[]) => args.length;


export {};