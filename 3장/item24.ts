// 아이템24 일관성 있는 별칭 사용하기

const borough = {name: 'wdwdwd', location: [40.555, -73.979]};
const loc = borough.location;

// 이런식으로 변경을하면 제어 흐름을 분석하기 어렵다.
// 한번 선언한 변수를 될 수 있으면 수정하지 않는 것이 제어 흐름을 분석하기 좋다.(불변성)
// https://www.linkedin.com/advice/0/what-difference-between-mutable-immutable-objects-h5n0c
loc[0] = 1313131;

type Coordinate = {
    x: number;
    y: number;
}

type BoundingBox = {
    x: [number, number];
    y: [number, number];
}

type Polygon = {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    if (polygon.bbox) {
        if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[0] || pt.y < polygon.bbox.y[1]) {
            return false;
        }
    }

    
}

// polygon.bbox 반복이라서 수정
function isPointInPolygon2(polygon: Polygon, pt: Coordinate) {
    const box = polygon.bbox;
    
    if (polygon.bbox) {
        if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[0] || pt.y < box.y[1]) {
            return false;
        }
    }

    
}

// polygon.bbox 반복이라서 수정
function isPointInPolygon3(polygon: Polygon, pt: Coordinate) {
    const box = polygon.bbox;
    
    if (box) {
        if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[0] || pt.y < box.y[1]) {
            return false;
        }
    }

    // box가 머지?? bbox인가 의문이 생겨서 선언 부분으로 다시 가봐야 함
}

// 객체 비구조화(object  destructuring) 를 사용하면 해결 가능
function isPointInPolygon4(polygon: Polygon, pt: Coordinate) {
    // polygon 야가 null이면 안된다.
    // 선택적 속성인 경우에는 따로 체크 로직이 필요
    const {bbox} = polygon;
    
    if (bbox) {
        if (pt.x < bbox.x[0] || pt.x > bbox.x[1] || pt.y < bbox.y[0] || pt.y < bbox.y[1]) {
            return false;
        }
        calculatePolyGon(polygon); // 함수 내에서 bbox 변경 로직이 들어갈 경우
        // bbox와 polygon.bbox가 다른 객체를 참조한다.
        // 속성을 변경하는 행위는 안하는 것이 좋다.(무조건 새로 생성)
    }
}

function calculatePolyGon(polygon: Polygon) {
    polygon.bbox = {};
}

// 객체 비구조화를 이용할 때는 주의사항
// 전체 bbox 속성이 아니라 x,y가 선택적 속성일 경우에 속성 체크가 더 필요합니다. 따라서 타입의 경계에 null 값을 추가하는 것이 좋다.(item31)
// bbox에는 선택적 속성이 적합했지만 holes는 그렇지 않습니다. holes가 선택적이라면, 값이 없거나 빈 배열이었을 것입니다. 차이가 없는데 이름을 구별한 것입니다. 



export {};