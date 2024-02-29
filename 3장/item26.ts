// 아이템26 타입 추론에 문맥이 어떻게 사용되는지 이해하기

function setLanguage(language: string) {
    
}

setLanguage('wdwdwd');
let language = 'wdwdwd';
setLanguage(language);

type Language = 'javascript' | 'Typescript' | 'Python';

function setLanguage2(language: Language) {
    
}

setLanguage2('javascript');
let language2 = 'javascript';
const language3 = 'javascript';
const language4: Language = 'javascript';

// language2는 변할 수 있기 때문에 에러 발생
setLanguage2(language2);
setLanguage2(language3);
setLanguage2(language4);


// 문맥과 값을 분리했다는게 먼말이지?
// 
function panTo(where: [number, number]) {

}

panTo([10, 20]);

const loc = [10, 20];
const loc2: [number, number] = [10, 20];
const loc3 = [10, 20] as const;

const loc4 = [10, 20, 30] as const;

loc2[0] = 11;
loc3[0] = 11;

panTo(loc);
panTo(loc2);
panTo(loc3);

function panTo2(where: readonly [number, number]) {

}

panTo2(loc3);

// 상수 단언을 사용할 경우 타입을 정의에 실수가 있었지만 에러는 호출하는 곳에서 발생
panTo2(loc4);

type GovernedLanguage = {
    language: Language,
    organization: string
}

function complain(language: GovernedLanguage) {}

complain({language: 'Typescript', organization: 'wdwdwdwdwd'});

const ts = {
    language: 'Typescript',
    organization: 'wdwdwdwd'
};

complain(ts);

function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}

callWithRandomNumbers((a,b) => {
    a;
    b;
    console.log(a+b);
});

const fn = (a: number,b: number) => {
    console.log(a+b);
}

callWithRandomNumbers(fn);

export {};