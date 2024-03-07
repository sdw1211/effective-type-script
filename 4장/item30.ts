// 아이템30 문서에 타입 정보를 쓰지 않기


// 코드와 주석이 맞지 않는 경우

// bad
/**
 * 전경색(foregound) 문자열을 반환합니다.
 * 0 개 또는 1개의 매개변수를 받습니다.
 * 매개변수가 없을 때는 표준 전경색을 반환합니다.
 * 매개변수가 있을 때는 특정 페이지의 전경색을 반환합니다.
 */
// good
/** 애플리케이션 또는 특정 페이지의 전경색을 가져옵니다. */
function getForegroundColor(page?: string) {
    return page === 'login' ? {r: 121, g: 127, b:127} :  {r:0, g:0, b:0};
}


// 위 주석의 문제점
// 1. 함수가 string 형태의 색까을 반환하고 적혀 있지만 식제는 객체를 반환
// 2. 주석에는 함수가 0걔 또는 1개의 매개변수를 받는다고 설명하고 있지만, 타입 시그니처만 보아도 명확하게 정보를 알 수 있다.
// 3. 불필요하게 장황하다.

// 될 수 있으면 주석달지 말자는데 이건 호불호가 있을 듯
// 주석을 사용할 것이면 동기화를 잘하자.
// 값을 변경하지 않는다고 주석달지 말고 readonly 를 활용하자.

export {};