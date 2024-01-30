interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

// 잉여 속성 체크라는 과정이 수행되는 경우
const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 100,
    elephant: 'present',
};

// 잉여 속성 체크라는 과정이 수행되지 않는 경우
const obj = {
    numDoors: 1,
    ceilingHeightFt: 100,
    elephant: 'present',
}

const r2: Room = obj;

interface Options {
    title: string;
    darkMode?: boolean;
    // 잉여 속성 체크를 사용하지 않기 위해서는 index signature 를 사용
    // [otherOptions: string]: unknown;
}

function createWindow(options: Options) {
    if (options.darkMode) {
        //
    }
}

createWindow({
    title: 'dwdwdwd',
    darkmode: false
});

createWindow({
    title: 'dwdwdwd',
    darkmode: false
} as Options);

const o1: Options = document;
const o2: Options = new HTMLAnchorElement;

createWindow(o1);
createWindow(o2);

export {};