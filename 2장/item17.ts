
function printTriangles(n: number) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}

// 해당 로직은 타입 체커 상에서는 오류가 발생하지 않지만 결과가 잘못 나오게 된다.
// readonly를 붙임으로써 위의 문제가 해결할 수 있다.
function arraySum(arr: readonly number[]) {
    let sum = 0, num;

    while((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}

function arraySum2(arr: readonly number[]) {
    return arr.reduce((pre, curr) => pre + curr, 0);
}

// number[]는 readonly number[]의 서브타입
const a: number[] = [1,2,3];
const b: readonly number[] = a;
const c: number[] = b;

// 특정 객체 타입의 속성들을 readonly 로 변경된 특정 타입을 만들고 싶을 때 Readonly제너릭을 사용한다.
const aaa ={
    a: 10,
    b: 20
}

aaa.a = 200;

const rAaa :Readonly<typeof aaa> = {
    a: 10,
    b: 20
}

rAaa.a = 111;










export {};