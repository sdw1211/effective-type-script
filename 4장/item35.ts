// 아이템35 데이터가 아닌, API와 명세를 보고 타입 만들기

import { Feature } from "geojson";

function calculateBoundingBox(f: Feature): BoundingBox | null {
    let box: BoundingBox | null = null;

    const {geometry} = f;

    if (geometry) {
        geometry.coordnated;
    }

    return box;
}

// 코드의 구석구석까지 타입 안전성을 얻기 위해 API 또는 데이터 형식에 대한 타입 생성을 고려해야 한다.
// 데이터에 드러나지 않는 예외적인 경우들이 문제가 될 수 있기 때문에 데이터보다는 명세로부터 생성하는 것이 좋다.

export {};