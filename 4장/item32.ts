// 아이템32 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하자.

// 유니온 타입의 속성을 가지는 인터페이스를 작성 중이라면, 혹시 인터페이스의 유니온 타입을 사용하는 게 더 알맞지 검토

type Layer = {
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
}

// FillLayout 이면서 LinePaint가 올 수 있는가? 올 수 없다면 잘못된 구조임
// 위 같은 경우는 타입을 분리 후 타입을 유니온으로 묶는다.

type FillLayer = {
    layout: FillLayout;
    paint: FillPaint;
}
type LineLayer = {
    layout: LineLayout;
    paint: LinePaint;
}
type PointLayer = {
    layout: PointLayout;
    paint: PointPaint;
}

type Layer2 = FillLayer | LineLayer | PointLayer;

// 이런 형태로 많이 쓰이는 것이 태그된 유니온

type Layer3 = {
    type: 'fill' | 'line' | 'point';
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
}

type FillLayer2 = {
    type: 'fill';
    layout: FillLayout;
    paint: FillPaint;
}
type LineLayer2 = {
    type: 'line';
    layout: LineLayout;
    paint: LinePaint;
}
type PointLayer2 = {
    type: 'point';
    layout: PointLayout;
    paint: PointPaint;
}

type Layer4 = FillLayer2 | LineLayer2 | PointLayer2;

function drawLayer(layer: Layer4) {
    if (layer.type === 'fill') {
        layer.paint;
        layer.layout;
    } else if (layer.type === 'point') {
        layer.layout;
        layer.paint;
    } else {
        layer.layout;
        layer.paint;
    }
}

// 태그된 유니온은 타입스크립트 타입 체커와 잘 맞기 때문에 어디서나 사용 가능

type Person = {
    name: string;
    // 다음은 둘 다 동시에 있거나 동시에 없습니다.
    placeOfBirth?: string;
    dateOfBirth?: string;
}


type Person2 = {
    name: string;
    birth?: {
        place: string;
        date: string;
    }
}

// 타입 구조에 손을 댈 수 없는 경우에는

type Name = {
    name: string;
}

type birth = {
    placeOfBirth: string;
    dateOfBirth: Date;
}

type PersonWithBitrh = Name & birth;
type Person3 = Name | PersonWithBitrh;

function eulogize(p: Person3) {
    if ('placeOfBirth' in p) {
        p
    } else {
        p
    }
}

export {};