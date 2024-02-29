// 아이템25 비동기 코드에는 콜백 대신 asnyc 함수 사용하기

// 콜백 지옥!
fetchURL(url1, function(response1)) {
    fetchURL(url2, function(response2)) {
        fetchURL(url3, function(response3)) {

        }
    }
}

// promise 사용
// 코드를 작성하기 쉽다.
// 타입을 추론하기 쉽다.
const page1Promise = fetch(url);

page1Promise.then(response => {
    return fetch(url2);
}).then(response2 => {
    return fetch(url3);
}).then(response3 => {
    return fetch(url4);
}).catch(error => {...})

// async 사용
async function fetchPages() {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
}

async function fetchPages2() {
    try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
        const response4 = await fetch(url4);
    } catch (ex) {
        ...
    }
}

// 병렬 처리
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

async function fetchPages() {
    const [response1, response2, response3] = await Promise.all([
        fetch(url1), fetch(url2), fetch(url3)
    ]);

    // const a: PromiseSettledResult;
    // const a: Response;
}

// 타입 아웃 예제
function timeout(milli: number): Promise<never> {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), milli);
    })
}

// Promise<Response | never> 이런 식으로 추론이 될 것으로 예상이 되지만 never 는 아무런 효과가 없기 때문에 Promise<Response>로 추론하게 된다.
async function fetchWithTimeout(url: string, ms: number) {
    return Promise.race([fetch(url), timeout(ms)]);
}

// promise 도 복잡하니 async await를 사용하자.

const _cache: {[url: string]: string} = {};


// 이렇게 callback 함수를 만들어서 쓰는방식은 하지 말자
function fetchWithCache(url: string, callback: (text: string) => void) {
    if (url in _cache) {
        // 이 메소드는 동기로 동작
        callback(_cache[url]);
    } else {
        fetchURL(url, text => {
            _cache[url] = text;
            callback(text);
        })
    }
}

let requestStatus: 'loading' | 'success' | 'error';

function getUser(userId: string) {
    fetchWithCache('wwww', pofile => {
        requestStatus = 'success';
    });

    requestStatus = 'loading';
}

// 이 로직은 항상 비동기로 동작하기 때문에 원하는 방향으로 잘 돈다.
async function fetchWithCache2(url: string) {
    if (url in _cache) {
        // 이 메소드는 동기로 동작
        return _cache[url];
    }

    const response = await fetch(url);
    const text = await response.text();

    _cache[url] = text;
    return text;
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Event_loop
// https://jaehyeon48.github.io/javascript/browser-event-loop/


export {};