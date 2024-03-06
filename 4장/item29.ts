// 아이템29. 사용할 때는 너그럽게, 생성할 때는 엄격하게

// 견고성 원칙, 포스텔의 법칙
// 함수의 매개변수는 타입의 범위가 넓어도 되지만, 결과를 반환할 때는 일반적으로 타입의 범위가 더 구체적이어야 한다.

declare function setCamera(camera: CameraOption): void;
declare function viewportForBounds(bounds: LngLatBounds): CameraOption;

type CameraOption = {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: Number;
};

// 여러 변의성을 주기 위해 다양한 형태로 등록 가능
type LngLat = {lng: number, lat: number} | {lon: number, lat: number} | [number, number];
type LngLatBounds = {northeast: LngLat, southwest: LngLat} | [LngLat, LngLat] | [number, number, number, number];

function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    // 에러
    const {center: {lat, lng}, zoom} = camera;
    zoom;
    window.location.search = '';
}

// 파라미터용과 결과용을 따로 분리해서 만들자.

// 결과용

type Camera = {
    center: LngLat2;
    zoom: number;
    bearing: number;
    pitch: Number;
};

type LngLat2 = {lng: number, lat: number};


// 파라미터용

type CameraOption2 = Partial<Camera>;
type LngLatLike = LngLat2 | {lon: number, lat: number} | [number, number];


type LngLatBounds2 = {northeast: LngLatLike, southwest: LngLatLike} | [LngLatLike, LngLatLike] | [number, number, number, number];

declare function setCamera2(camera: CameraOption2): void;
declare function viewportForBounds2(bounds: LngLatBounds2): Camera;

function focusOnFeature2(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds2(bounds);
    setCamera(camera);
    // 에러
    const {center: {lat, lng}, zoom} = camera;
    zoom;
    window.location.search = '';
}

// 보통 매개변수 타입은 반환 타입에 비해 범위가 넓은 경향이 있다. 
// 매개변수와 반환 타입의 재사용을 위해서 기본 형태와 느슨한 형태를 도입하는 것이 좋다.

export {};