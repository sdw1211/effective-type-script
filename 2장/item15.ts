// 객체를 생성하는 법

const rocket = {
    name: 'Falcon 9',
    variant: 'block 5',
    thrust: '7,607 kn',
};

// 인덱스 시그니처를 활용한 타입 설정
type Rocket = {[property: string]: string};

const rocket2: Rocket = {
    name: 'Falcon 9',
    variant: 'block 5',
    thrust: '7,607 kn',
    aaa: '',
};

// csv 파일의 경우 컬럼명이 무엇이 올지 알 수 없기 때문에 인덱스 시그니처를 활용하기 좋은 예이다.
function parseCSV(input: string): {[columnName: string]: string | undefined}[] {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    const headerColumns = header.split(',');

    return rows.map(rowStr => {
        const row: {[columnName: string]: string | undefined} = {};
        rowStr.split(',').forEach((cell, i) => {
            row[headerColumns[i]] = cell;
        });

        return row;
    })
}

// 
type Row1 = {[column: string]: number};
type Row2 = {a: number, b?: number, c?: number, d?: number};
type Row3 = {a: number, b: number, c: number, d: number} | {a: number, b: number, c: number} | {a: number, b: number} | {a: number};

type Vec3D = Record<'a' | 'b' | 'c', number>;
type Vec3D2 = {[k in 'a' | 'b' | 'c']: number};
type Vec3D3 = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string : number};

export {};