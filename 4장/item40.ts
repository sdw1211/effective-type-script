// 아이템40 함수 안으로 타입 단언문 감추기

// 함수를 작성하다 보면, 외부로 드로난 타입 정의는 간단하지만 내부 로직이 복잡해서 안전한 타입으로 구현하기 어려운 경우가 많다.
// 함수의 모든 부분을 안전한 타입으로 구현하는 것이 이상적이지만, 불필요한 예외 상황까지 고려해 가며 타입 정보를 힘들게 구성할 필요는 없다.

declare function cacheLast<T extends Function>(fn: T): T; 
declare function shallowEqual(a: any, b: any): boolean;

function cacheLast1<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;
    let c = () => {};

    return function(...args: any[]) {
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    } as unknown as T;
}

class B {
    a: number;
    constructor(a: number) {
        this.a = a;
    }
}
class A extends B {
    b: number;
    constructor(b: number) {
        super(b);
        this.b = b;
    }

}

const a:A = new A(10);
const b:B = new A(10);

const c:A = new B(10);

const c3:A = b;
const c2:A = b as A;

// https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#type-assertions
cacheLast1(() => {})();

function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    for (const [k, aval] of Object.entries(a)) {
        if(!(k in b) || aval !== (b as any)[k]) {
            return false;
        }
    }

    return Object.keys(a).length === Object.keys(b).length;
}




export {};