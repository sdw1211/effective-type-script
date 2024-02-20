// 타입을 좁히는 방법: null 체크
// el: HTMLElement | null
const el = document.getElementById('foo');

// 널체크를 통해 null 타입을 제외해서 타입을 좁힘
if (el) {
    // el: HTMLElement
    el.innerHTML = 'Party Time'.blink();
} else {
    // el: null
    alert('No element #foo');
}


// 예외를 던지거나 반환을 해도 똑같은 상황이 만들어짐

el;

if (!el) {
    throw new Error('test'); 
}

el;


// instanceof 를 활용해서 타입을 좁히는 예제
function contains(text: string, search: string|RegExp) {
    if (search instanceof RegExp) {
        search;
        return search.test(text);
    }

    search;
    return text.includes(search);
}

// 속성 체크
type A = {
    a: number;
}

type B = {
    b: number;
}

function pickAB(ab: A | B) {
    if ('a' in ab) {
        ab;
    } else {
        ab;
    }

    ab;
}


// 일부 내장 함수로도 타입을 좁힐 수 있다.

function contains2(text: string, search: string|string[]) {
    const termList = Array.isArray(search) ? search : [search];

    termList;
}

// 타입스크립트는 일반적으로 조건문에서 타입을 좁히는 데 매우 능숙하다.
// 그리고 잘못 사용할 경우가 많기 때문에 꼼꼼히 따져 봐야 한다.

const el3 = document.getElementById('foo');

// typeof null 도 object 이기 떄문에 이런 방법은 되지 않는다.
if (typeof el3 === 'object') {
    el3;
}

// 안좁혀지는 경우
function foo(x?: number|string|null) {
    // 숫자 0로 false, 빈문자열도 false 그래서 string, number 가 좁혀지지 않는다.
    if (!x) {
        x;
    }
}


// 명시적으로 태그를 붙이는 방법
// 태그된 유니온 또는 구별된 유니온이라고 불린다.
type UploadEvent = {
    type: 'upload',
    filename: string,
    contents: string
};

type DownloadEvent = {
    type: 'download',
    filename: string,
};

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
    switch(e.type) {
        case 'download':
            e;
            break;
        case 'upload':
            e;
            break;
    }
}


// 식별을 돕기 위한 커스톰 함수를 도입하는 방법(사용자 정의 타입 가드)

// true은 경우 el은 HTMLInputElement 임을 명시해줌으로써 타입 좁하기가 가능
function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el;
}


function getElemetContent(el: HTMLElement) {
    if (isInputElement(el)) {
        el;
        return el.value;
    }

    el;
    return el.textContent;
}


const jackson5 = ['A', 'B', 'C', 'D', 'E'];
const members = ['F', 'E'].map(who => jackson5.find(n => n === who));

// undefined 를 없애고 싶은 경우
const members2 = ['F', 'E'].map(who => jackson5.find(n => n === who)).filter(who => who !== undefined);

// 타입 가드를 사용하면 가능
function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}

const members3 = ['F', 'E'].map(who => jackson5.find(n => n === who)).filter(isDefined);

export {};