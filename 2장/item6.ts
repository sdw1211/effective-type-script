let num = 10;

// 타입 추론도 가능
function add(a: number, b: number) {
    return a + b;
}

// 타입좁하기, 넗히기 등에 제대로 되는지도 확인 가능
function logMessage(message: string | null) {
    if(message) {
        message;
    }
}

const foo = {
    x: [1,2,3],
    bar: {
        name: 'Fred'
    }
};

function restOfPath(path: string) {
    return path.split('/').slice(1).join('/');
}

// 타입 오류를 살펴볼 때도 좋다
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    if (typeof elOrId === 'object') {
        return elOrId;
    } else if (elOrId === null) {
        return document.body;
    } else {
        const el = document.getElementById(elOrId);
        return el;
    }
}

// 메소드를 추적해볼 수도 있다.
const reponse = fetch('http://www.naver.com');




export {};