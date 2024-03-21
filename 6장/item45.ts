// 아이템 45 devDependencies에 typescript 와 @types 추가하기

// typescript는 개발 도구일 뿐이고 타입 정보는 런타임에 존재하지 않기 때문에 devDependencies 에 존재해야 한다.
// 고려해야할 의존성 두 가지
// 1. 타입스크립트 자체 의존성을 고려

    // 시스템 레벨로 설치할 수 있지만 추천하지 않는 이유
    // 1. 팀원들 모두가 항상 동일한 버전을 설치한다는 보장이 없다.
    // 2. 프로젝트를 셋업할 떄 별도의 단계가 추가된다.
    // https://docs.npmjs.com/cli/v10/commands/npx
// 2. 타입 의존성(@types)을 고려
// 사용하려는 라이브러리에 타입 선언이 포함되어 있지 않더라도, DefinitelyTyped(타입스크립트 컴니티에서 유지보수하고 있는 자바스크립트 라이브러리의 타입을 정의한 모음)에서 타입 정보를 얻을 수 있음.
// 원본은 dependencies에 있더라도 @types 의 의존성은 devDependencies에 존재해야 한다.

export {};