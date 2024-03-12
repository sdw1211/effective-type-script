// 아이템38 any 타입은 가능한 한 좁은 범위에서만 사용하기
type Bar = {x:10};
type Foo = {y:20};


function processBar(b: Bar) {}
function expressReturningFoo(): Foo {
    return {y:20};
}


function f() {
    const x = expressReturningFoo();
    processBar(x);
}


function f2() {
    const x: any = expressReturningFoo();       // 이렇게 하지 말자
    processBar(x);
    return x;
}

function f3() {
    const x = expressReturningFoo();
    processBar(x as any);                       // 이게 낫습니다.
    return x;
}

function g() {
    const foo = f2();
    foo.y;
    foo.x;

    const foo2 = f3();
    foo2.y;
    foo2.x;
}

// f2의 경우는 f2 함수 전체에서 x가 any로 동작한다.
// f3의 경우는 processBar 함수 내에서만 x 가 any로 동작하기 때문에 범위가 더 좁다.

function f4() {
    const x = expressReturningFoo();
    // @ts-ignore
    // 자바스크립트 라이브러리인데 타입을 제공하지 않는 경우에 사용
    // 혹시 다른 경우에 사용하는 상황이 있는지?
    processBar(x);                       
    return x;
}

type Config = {
    a: number;
    b: number;
    c: {
        key: Foo
    };
}

const value: Bar = {x: 10};

const config: Config = {
    a:1,
    b:2,
    c: {
        key: value
    }
} 

const config2: Config = {
    a:1,
    b:2,
    c: {
        key: value
    }
} as any;

const config3: Config = {
    a:1,
    b:2,
    c: {
        key: value as any
    }
};

// 의도하지 않은 타입 안전성의 손일을 피하기 위해서 any 의 사용 범위를 최소한으로 좁혀야 한다.
// 함수의 반환 타입이 any인 경우 타입 안전성이 나빠진다. 따라서 any 타입을 반환하면 절대 안된다.
// 강제로 타입 오류를 제거하려면 any 대신 @ts-ignore를 사용하는 것이 좋다.


export {};