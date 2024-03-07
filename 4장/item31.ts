// 아이템31 타입 주변에 null값 배치하기

function extent(nums: number[]) {
    let min, max;
    for(const num of nums) {
        if (!min) {
            min = num;
            max = num;
        } else {
            min = Math.min(min, num);
            max = Math.max(max, num);  
        }
    }
    return [min, max];
}

// 위 에제의 구조적 결합
// 1. 최솟값이나 최대값이 0인 경우, 값이 덧씌워져 버린다.
// 2. nums 배열이 비어 있다면 함수는 [undefined, undefined]를 반환한다.


function extent2(nums: number[]) {
    // 타입 주변에 null 값 배치
    let result: [number, number] | null = null;
    for(const num of nums) {
        if (!result) {
            result = [num, num];
        } else {
            result = [Math.min(result[0], num), Math.max(result[1], num)];
        }
    }
    return result;
}

// 단언(!)을 사용함으로써 표현
const [min, max] = extent2([0,1,2])!;
const span = max - min;

// if문 사용
const range = extent2([0,1,2]);
if (range) {
    const [min, max] = range;
    const span = max - min;
}


class UserPosts {
    user: UserInfo | null;
    posts: Post[] | null;

    constructor() {
        this.user = null;
        this.posts = null;
    }

    async init(userId: string) {
        return Promise.all([
            async () => this.user = await fetch(''),
            async () => this.posts = await fetch(''),
        ])
    }
    
    getUserName() {
        // 만거 null 로직이 많이 들어가야 한다.
    }
}

// 속성마다 null 값을 가지고 있는 경우 네트워크 요청이 로드될 때 여러가지 경우를 고민해봐야 한다.
// 그렇게 고민이 많이지면 버그가 많이 생성될 수 있다.

class UserPosts2 {
    user: UserInfo;
    posts: Post[];

    constructor(user: UserInfo, posts: Posts[]) {
        this.user = user;
        this.posts = posts;
    }

    static async init(userId: string): Promise<UserPosts2> {
        const [user, posts] = await Promise.all([
            fetch(''),
            fetch(''),
        ]);

        return new UserPosts2(user, posts);
    }
    
    getUserName() {
        return this.user.name;
    }
}

// 한 값의 null 여부가 다른 값의 null 여부에 암시적으로 관련되도록 설계
// API 작성 시에는 반환 타입을 큰 객체로 만들고 반환 타입 전체가 null 이거나 null이 아니게 만들어야 한다. 
// 클래스를 만들 때느 필요한 모든 값이 준비되었을 때 생성하여 null이 존재하지 않도록 한다.
// strickNullChecks는 무조건 하자.

export {};