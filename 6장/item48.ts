// 아이템 48 API 주석에는 TSDoc 사용하기

// 인사말을 생성합니다.
/** 인사말을 생성합니다. 
 * @param name 인사할 사람의 이름
 * @param title 그 사람의 칭호
 * @returns 사람이 보기 좋은 형태의 인사말
 * 
*/
function greet(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

greet('aaa', 'bbbb');

/** 특정 시간과 장소에서 수행된 측정 */
type Measurement = {
    /** 어디서에 측정되었나? */
    position: [number, number];
    /** 언제 측정되었나? 초 단위로 */
    time: number;
    /** 측정된 운동량 */
    momentum: [number, number];
}

const m: Measurement = {
    position: [1,2],
    time: 100,
    momentum: [4,5]
}


/**
 * 이 _타입_ 은 **세 가지** 속성을 가진다.
 * 1. x
 * 2. y
 * 3. z
 */
type Vector3D = {
    x: number;
    y: number;
    z: number;
}

// 주석을 너무 장황하게 쓰지 말자
// 주석에 타입 정보를 명시하지 말자.

export {};