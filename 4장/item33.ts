// 아이템33 string 타입보다는 더 구체적인 타입 사용하기

// string 타입의 범위는 매우 넓습니다.

type Album = {
    artist: string;
    title: string;
    releaseDate: string;    // YYYY-MM-DD
    recordingType: string;  // 'live' | 'studio'
}

// 다른 형태로 데이터를 넣을 수 있다.
const test: Album = {
    artist: 'wdwdwd',
    title: 'wdwdwdw',
    recordingType: 'aaaa',
    releaseDate: '2017/03/20'
};

// 데이터를 잘못넣어도 알 수 없다.
function recordRelease(title: string, date: string) {}
recordRelease(test.recordingType, test.artist);

// 개선

type RecordingType = 'live' | 'studio';

type Album2 = {
    artist: string;
    title: string;
    releaseDate: Date;    // YYYY-MM-DD
    // 이 녹음은 어떤 환경에서 이루어졌는지?
    recordingType: RecordingType;
}

const test2: Album2 = {
    artist: 'wdwdwd',
    title: 'wdwdwdw',
    recordingType: 'aaaa',
    releaseDate: '2017/03/20'
};

// 위 방식의 장점
// 1. 타입을 명시적으로 정의함으로써 다른 곳으로 값이 전달되어도 타이 정보가 유지

function getAlbumsOfType(recordingType: string) {

}

function getAlbumsOfType2(recordingType: RecordingType) {
    
}

// 2. 타입을 명시적으로 정의하고 해당 타입의 의미를 설명하는 주석을 붙여 넣을 수 있다.
// 3. keyof 연산자로 더욱 세밀하게 객체의 속성 체크가 가능
function pluck(records: any[], key: string) {
    return records.map(r => r[key])
}

function pluck2<T>(records: T[], key: string) {
    return records.map(r => r[key])
}

type K = keyof Album2;
const k: K = 'artist';

function pluck3<T>(records: T[], key: keyof T) {
    return records.map(r => r[key])
}

const albums: Album2[] = [];

const releaseDate = pluck3(albums, 'releaseDate');


function pluck4<T, K extends keyof T>(records: T[], key: K): T[K][] {
    return records.map(r => r[key])
}

const releaseDate2 = pluck4(albums, 'releaseDate');


export {};