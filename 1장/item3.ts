let x = 'hello';
x = 1234;

interface Square {
    kind: 'square';
    width: number;
}

interface Rectangle extends Square {
    kind: 'rectangle';
    height: number;
}

// 유니온 기법
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    // instanceof 함수는 런타임 시에 동작하는 함수
    // 타입스크립트의 타입, interface, 타입 구문은 타임체커에서만 사용하고 트렌스파일 시 전부 삭제
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}

// 타입체커에서 활용할 수 있도록 로직을 수정1
function calculateArea2(shape: Shape) {
    // height 프로퍼티가 존재하는 여부로 판단(타입 추론 - 타입 좁히기)
    if ('height' in shape) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}

// 타입체커에서 활용할 수 있도록 로직을 수정2
function calculateArea3(shape: Shape) {
    // kind라는 tag를 둬서 활용하는 방식(타입 추론 - 타입 좁히기)
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}


// 클래스를 활용하는 방식

class Square2 {
    constructor(public width: number) {

    }
}

class Rectangle2 extends Square2 {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

function calculateArea4(shape: Shape) {
    // instanceof 함수는 런타임 시에 동작하는 함수
    // 클래스의 경우는 런타임에도 존재하기 떄문에 해당 로직이 동작한다.
    if (shape instanceof Rectangle2) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}



// 타입체커를 통과하지만 잘못된 로직
function asNumber(val: number | string): number {
    return val as number;
}

// 타입체커를 통과하지만 잘못된 로직
function asNumber2(val: number | string): number {
    return typeof(val) === 'string' ? Number(val) : val;
}







export {};