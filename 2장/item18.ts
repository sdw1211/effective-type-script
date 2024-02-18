interface ScatterProps {
    xs: number[];
    ys: number[];

    xRange: [number, number];
    yRange: [number, number];
    color: string;

    onClick:(x: number, y:number, index: number) => void;
}

// 새로운 속성이 추가되면 차트를 다시 그린다.
// 관련 속성이 차트를 그릴 때 필요 없는 속성일 수도 있지만 그래도 다시 그린다.
// 실패에 닫힌 접근법
function shouldUpdate(oldProps: ScatterProps, newProp: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProp[k]) {
            if(k !== 'onClick') {
                return true;
            }
        }
    }

    return false;
}

// 그릴 때 필요한 속성만 뽑아서 만든다.
// 그릴 떄 필요없는 속성이 추가되더라도 다시 그리지 않는다.
// 누락될 가능성이 있다.
// 실패에 열린 접근법
function shouldUpdate2(oldProps: ScatterProps, newProp: ScatterProps) {
    return (
        oldProps.xs !== newProp.xs ||
        oldProps.ys !== newProp.ys ||
        oldProps.xRange !== newProp.xRange ||
        oldProps.yRange !== newProp.yRange ||
        oldProps.color !== newProp.color 
    )
}

// 둘다 좋은 방법이 아니고 새로운 속성이 추가되었을 때 직접 shouldUpdateX 를 수정하도록 하는 것이 좋다.
// 그렇다고 주석을 추가하는 방법은 좋지 않고 타입 체크를 통해서 체크할 수 있도록 하는 것이 좋다.
const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false
};

function shouldUpdate3(oldProps: ScatterProps, newProp: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {

        if (REQUIRES_UPDATE[k] && oldProps[k] !== newProp[k]) {
            return true;
        }
    }

    return false;
}

export {};