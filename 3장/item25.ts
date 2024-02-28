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

async function fetchPages() {
    const [response1, response2, response3] = await Promise.all([
        fetch(url1), fetch(url2), fetch(url3)
    ]);
}




export {};