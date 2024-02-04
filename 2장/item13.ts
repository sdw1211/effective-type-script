// 명명된 타입을 정의하는 방법

// 1. 타입을 사용

type TState = {
    name: string;
    capital: string;
}

// 2. interface

interface IState {
    name: string;
    capital: string;
}

// 공통점

// 둘다 잉여 속성 체크가 가능
const aaa: TState = {
    name: 'aaaa',
    capital: 'bbbb',
    aaaa: '',
};

const bbb: IState = {
    name: 'wdwdwd',
    capital: 'dwdwddw',
    aaaa: '',
}

// 인덱스 시그니처 사용 가능
type TDict = {[key: string]: string};
interface IDict {
    [key: string]: string
}

// 합수 타입도 정의 가능
// 함수의 경우는 타입 별칭을 사용하는 것이 더 나은 선택일 수 있지만 추가 속성이 있는 경우 사용하면 좋음
type TFn = (x: number) => string;
type TFn2 = {
    (x: number): string;
    prop: string;
}

//하나의 익명 함수가 있는 경우 이 함수를 자동으로 선택
interface IFn {
    (x: number): string;
}
interface IFn2 {
    (x: number): string;
    prop: string;
}

const toStrT: TFn = x => x.toString();
const toStrI: IFn = x => x.toString();

// 할당은 이렇게
const toStrT2: TFn2 = (x) => '100';
toStrT2.prop = 'wdwd';

const toStrI2: IFn2 = x => x.toString();
toStrI2.prop = 'wdwdwd'

// 제너릭도 가능

type TPair<Type> = {
    first: Type;
    second: Type;
}

interface IPair<Type> {
    first: Type;
    second: Type;
}

// 타입 확장도 가능
interface IStateWithPop extends TState {
    population: number;
}

// 유니온 타입과 같은 복잡한 타입은 타입만으로 가능
type TStateWithPop = IState & {
    population: number
}

// 클래스 구현도 둘다 가능

class StateT implements TState {
    name: string = '';
    capital: string = '';
}


class StateI implements IState {
    name: string = '';
    capital: string = '';
}

// 차이점

// 유니온은 타입만 가능
type Input = {};
type Output = {};

interface VariableMap {
    [name: string]: Input | Output;
}

// 유니온 타입에 name 속성을 붙인 타입
// 이런건 인터페이스 표현 불가
type NamedVariable = (Input | Output) & {name: string};


// 튜플이나 배열 타입은 타입을 쓸 경우 더 간결하게 표현 가능
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

// 인터페이스로도 튜플을 구현할 수 있지만...
interface Tuple {
    0: number;
    1: number;
    length: 2;
}

// 이렇게 쓸까나?
// 배열의 함수들 사용 불가

// 인터페이스는 보강이 가능
// 인터페이스를 중복으로 선언이 되면 중복된 인터페이스의 프로퍼티를 자동으로 합해준다.(교집합)
// 선업 병합(타입 선언 파일에서 사용)
interface IState {
    name: string;
    capital: string;
}

interface IState {
    population: number;
}

const ccccc: IState = {
    name: 'wdwdwdw',
    capital: 'wdwdwd',
    population: 100_000,
}






export {};




