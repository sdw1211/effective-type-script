// 아이템 56. 정보를 감추는 목적으로 private 사용하지 않기

// 자바스크립트 클래스에 비공개 속성을 만들 수 없다.(X #을 사용하여 만들 수 있게 스팩이 변경(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_properties))

class Diary {
    private secret = 'dwdwdwwdwd';
}

const diary = new Diary();
// diary.secret;
(diary as any).secret;

// public protected private 같은 접근 제어자는 타입스크립트 키워드 이기 때문에 트랜스파일 후 제거
// 실제 런타임에서는 해당 속성을 사용할 수 있다.
// 정보를 감추기 위해서 private을 사용ㅎ면 안된다.(그럼 언제 사용하지??)
// 정보를 숨기기 위한 가장 효율적인 방법은 클로저(옛날 이야기 #쓰세요.)

declare function hash(text: string): number;

class PasswordChecker {
    checkPassword: (password: string) => boolean;
    constructor(paswordHash: number) {
        this.checkPassword = (password) => hash(password) === paswordHash;
    }
}

const checker = new PasswordChecker(hash('ssss'));
checker.checkPassword('aaaa');

class Diary2 {
    #secret = 'dwdwdwwdwd';
}

const diary2 = new Diary2();
// diary.secret;
(diary as any).secret;



export {};