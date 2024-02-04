console.log('Cylinder 1 X 1', 'Surface area: ', 6.283185 * 1 * 1 + 6.283185 * 1 * 1, 'Volume:', 3.14159 * 1 * 1 * 1);
console.log('Cylinder 1 X 2', 'Surface area: ', 6.283185 * 1 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 1 * 2 * 1);
console.log('Cylinder 2 X 1', 'Surface area: ', 6.283185 * 2 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 2 * 2 * 1);

//반복되는 내용이 많으니 개선해보자
//DRY 원칙
const surfaceArea = (r,h) => 2 * Math.PI * r * (r + h);
const volume = (r,h) => Math.PI * r * r * h;

for (const [r,h] of [[1,1], [1,2], [2,1]]) {
    console.log(
        `Cylinder ${r} X ${h}`,
        `Surface area: ${surfaceArea(r,h)}`,
        `Volume: ${volume(r,h)}`
    )
}

// 타입에서도 적용해보자

// before
interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate {
    fristName: string;
    lastName: string;
    birth: Date;
}

// after
interface PersonWithBirthDate2 extends Person {
    birth: Date;
}

type PersonWithBirthDate3 = Person & {
    birth: Date
}

const person: PersonWithBirthDate3 = {
    firstName: '121212',
    lastName: '232323',
    birth: new Date
}

// 반복을 줄이는 가장 쉬운 방법은 타입에 이름을 붙이는 것
// before
function distance(a: {x: number, y:number}, b: {x: number, y: number}) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// after
type Point2D = {
    x: number;
    y: number;
}

function distance2(a: Point2D, b: Point2D) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// 시그니처 분리
// before
function get(url: string, opts: Options): Promise<Response> {}
function post(url: string, opts: Options): Promise<Response> {}


// after
type HTTPFunction = (url: string, opts: Options) => Promise<Response>;

const get: HTTPFunction = (url, opt) => {};
const post: HTTPFunction = (url, opt) => {};


interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}

// 2개의 연관성이 없을 경우에는 상속으로 처리하는 것이 아니라 중복 유지
// 이것이 맞는지는 고민
interface TopNavStatus2 {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
}

interface State2 {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}


interface PageState3 extends State2 {
    pageContents: string;
}

// 중복성 제거가 먼저가 코드를 잘 파악할 수 있는 것이 먼저냐는 항상 고민해봐야 할 포인트
interface TopNavStatus2 {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
}

interface TopNavState3 extends State2 {
}

type TopNavState5 = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};

type TopNavState6 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;


interface SaveAction {
    type: 'save',
}

interface LoadAction {
    type: 'load',
}

interface DeleteAction {
    type: 'delete',
}

type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load';

type ActionType2 = Action['type'];
type ActionType3 = Pick<Action, 'type'>;

// 모든 속성을 선택적으로 변경하고 싶은 경우
type Options = {
    width: number;
    height: number;
    color: string;
    label: string;
}

type OptionsUpdate = {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}

class UIWdiget {
    constructor(init: Options) {}
    update(options: OptionsUpdate) {}
}

type OptionsUpdate2 = {
    [k in keyof Options]?: Options[k];
}

type OptionsUpdate3 = Partial<Options>;

// 값 형태의 타입을 정의하고 싶은 경우
const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00',
    label: 'VGA'
}

type Options5 = {
    width: number;
    height: number;
    color: string;
    label: string;
}

type Options6 = typeof INIT_OPTIONS;

// 매서드의 반환 값에 명명된 타입을 만들고 싶은 겨우
function getUserInfo(userId: string) {
    return {
        userId,
        name,
        age,
        height,
        weight,
        favoriteColor,
    };
}

type UserInfo = ReturnType<typeof getUserInfo>;

interface Name {
    first: string;
    last: string;
}

type DancingDuo<T extends Name> = [T, T];
const couple1: DancingDuo<Name> = [{
    first: 'dwdwd',
    last: 'wdwdwd'
}, {
    first: 'dwdwdwdw',
    last: 'wdwdwd2323',
}];

const couple2: DancingDuo<{first: string}> = [{
    first: 'dwdwd',
}, {
    first: 'wdwwww',
}];

export {};