// 아이템61 의존성 관계에 따리 모듈 단위로 전환하기

// 마이그레이션의 첫 단계는 서드파티 모듈과 외부 API 호출에 대한 @types를 추가하는 것
// 의존성 관계도의 아래에서부터 위로 올라가며 마이그레이션을 하면 된다. 첫 번째 모듈은 보통 유틸리티 모듈이다. 의존성 관계도를 시각화하여 진행 과적을 추적하는 것이 좋다.
// 이상한 설계를 발견하더라도 리팩터링을 하면 안된다. 마이그레이션 작업은 타입스크립트 전환에 집중해야 하며, 나중의 리펙터링을 위해서 목록을 만들자.
// 일반적인 오류들은 수정해주자.

// 선언되지 않은 클래스 맴버
class Greeting {
    constructor(name) {
        this.greeting = '2e32ewdw';
        this.name = name;
    }
}

// 타입이 바뀌는 값

const state = {};
state.name = 'wdwdwdw';
state.capital = 'wdwdwdwdwd';

const state2 = {
    name: 'wdwdwdwd',
    capital: 'wdwdwdwd',
}

type State = {
    name: string;
    capital: string;
}

const state3 = {} as State;
state3.name = 'wdwdwdw';
state3.capital = 'wdwdwdwdwd';


/**
 * 
 * @param {number} num 
 * @returns 
 */
function double(num: number) {
    return 2 * num;
}

double('wdwdwdw');




export {};