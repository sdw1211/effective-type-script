// 아이템 28 유효한 상태만 표현하는 타입을 지향하기
// 타입 설계를 잘못하면 아무것도 도움이 되지 않는다.

type State = {
    pageText: string;
    isLoading: boolean;
    error?: string;
};

function render(currentPage: number, state: State) {
    if (state.error) {
        return `Error! ${currentPage}: ${state.error}`;
    } else if (state.isLoading) {
        return `Loading! ${currentPage}`;
    }

    // isloading true이고 error 메세지가 있는 경우 제대로된 분기가 될 수 없다.

    return `${currentPage}: ${state.pageText}`;
}

async function changePage(state: State, newPage: string) {
    state.isLoading = true;

    try {
        const response = await fetch('');
        if (!response.ok) {
            throw new Error(`로딩 할 수 없습니다. ${newPage}: ${response.statusText}`);
        }
        const text = await response.text();
        state.isLoading = false;
        state.pageText = text;
    } catch(e) {
        state.error = (e as Error).message;
    }
}

// 위 로직의 문제점
// 1. 오류가 발생했을 때 state.isloading 을 false로 설정하는 로직이 빠져있음
// 2. state.error를 초기화하지 않았기 때문에, 페이지 전환 중에 로딩 메시지 대신 과거의 오류 메시지를 보여 주게 된다.
// 3. 페이지 로딩 중에 사용자가 페이지를 바꿔 버리면 어떤 일이 벌어질지 예상하기 어렵다. 새 페이지에 오류가 뜨거나, 응답이 오는 순서에 따라 두 번째 페이지가 아닌 첫 번째 페이지로 전환될 수 있다.
// 문제는 상태 값이 두 가지 속성이 동시에 정보가 부족하거나, 두 가지 속성이 충돌나면서 발생하는 문제(error, isloading이..)
// 상태에 맞는 각각의 타입을 만들고 처리하자.

type RequestPending = {
    state: 'pending';
};

type RequestError = {
    state: 'error';
    error: string;
};

type RequestSuccess = {
    state: 'ok';
    pageText: string;
};

type RequestState = RequestPending | RequestError | RequestSuccess;

type State2 = {
    currentPage: string;
    requests: {
        [page: string]: RequestState
    }
};


function render2(state: State2) {
    const {currentPage} = state;
    const requestState = state.requests[currentPage];

    if (requestState.state === 'error') {
        return `Error! ${currentPage}: ${requestState.error}`;
    } else if (requestState.state === 'pending') {
        return `Loading! ${currentPage}`;
    }

    return `${currentPage}: ${requestState.pageText}`;
}

async function changePage2(state: State2, newPage: string) {
    state.requests[newPage] = {state: 'pending'};
    state.currentPage = newPage;

    try {
        const response = await fetch('');
        if (!response.ok) {
            throw new Error(`로딩 할 수 없습니다. ${newPage}: ${response.statusText}`);
        }
        const pageText = await response.text();
        state.requests[newPage] = {state: 'ok', pageText};
    } catch(e) {
        state.requests[newPage] = {state: 'error', error: '' + e};
    }
}

// 타입을 설계할 때는 어떤 값들을 포함하고 어떤 값들을 제외할지 신중하게 생각해야 한다.
// 유효한 상태를 표현하는 값만 허용ㅎㄴ다면 코드를 작성하기 쉬워지고 타입 체크가 용이해진다.
// 유효한 상태만 허용하는 것은 매우 일반적인 원칙

export {};