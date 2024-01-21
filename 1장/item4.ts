interface Vector2D {
    x: number;
    y: number;
};

function calculateLength(v: Vector2D) {
    return Math.sqrt((v.x ** 2) + (v.y ** 2));
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = {
    name: 'test',
    x: 10,
    y: 20
};

const v2: Vector2D = {
    x: 10,
    y: 20
}

calculateLength(v2);

// 타입스크립트에서 타입체커는 덕타입 기반의 타입체크를 한다.
// 타입이 어떤 형태인지보다 필요한 프로퍼티와 메서드가 존재하는지 여부로 판단
calculateLength(v);


interface Vector3D {
    x: number;
    y: number;
    z: number;
}

// 길이를 1로 만드는 함수
function normalize(v: Vector3D) {
    // calculateLength 함수는 x,y 프로퍼티만 존재하면 동작한다.
    // z가 무시되기 때문에 길이가 잘못나오게 됨
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length
    };
}

function calculateLength1(v: Vector3D) {
    let length = 0;

    for (const axis of Object.keys(v)) {
        const coord = v[axis];

        length += Math.abs[coord];
    }

    return length;
}

function calculateLength2(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}







export {};

