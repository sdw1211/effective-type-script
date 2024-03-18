// 아이템37 공식 명칭에는 상표 붙이기

type Vector2D = {
    _brand: '2D';
    x: number;
    y: number;
}

function calculateNorm(p: Vector2D) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm({x:1, y:3});
const vec3D = {x:3, y:2, z:10};

// 구조적 타입 입장에서는 맞지만 논리적 입장에서는 맞지 않다.
// 이런 경우에는 임시로 상표 값 하나 넣어준다.
calculateNorm(vec3D);

// 상표를 사용할 때는 생성자 함수를 하나 만들어준다.
function vec2D(x: number, y: number): Vector2D {
    return {x, y, _brand: '2D'};
}

calculateNorm(vec2D(1,3));

const vec3D2 = {x:3, y:2, z:10, _brand: '2D'};
// 악의적으로 _brand 속성을 넣는 것 까지는 못막는다.
// 실수 예방을 위해서 사용
calculateNorm(vec3D2);

type AbsolutePath = string & {_brand: 'abs'};
function listAbsolutePath(path: AbsolutePath) {

}

function isAbsolutePath(path: string): path is AbsolutePath {
    return path.startsWith('/');
}

function f(path: string) {
    listAbsolutePath(path);

    if (isAbsolutePath(path)) {
        path;
    }

}

// 타입스크립트는 구조적 타이핑을 사용하기 때문에, 값을 세밀하게 구분하지 못하는 경우가 있다. 값을 구분하기 위해 공식 명칭이 필요하다면 상표를 붙이는 것을 고려하자.
// 상표 기법은 타입 시스팀에서 동작하지만 런타임에 상표를 검사하는 것과 동일한 효과를 얻을 수 있다.

export {};