// 아이템 56. 정보를 감추는 목적으로 private 사용하지 않기
// 자바스크립트 클래스에 비공개 속성을 만들 수 없다.(X #을 사용하여 만들 수 있게 스팩이 변경(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_properties))
class Diary {
    secret = 'dwdwdwwdwd';
}
const diary = new Diary();
// diary.secret;
diary.secret;
class PasswordChecker {
    checkPassword;
    constructor(paswordHash) {
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
diary.secret;
export {};
//# sourceMappingURL=item56.js.map