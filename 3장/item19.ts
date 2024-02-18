// 나쁜 예
let x: number = 12;

// 좋은 예
let x1 = 12;


// 타입이 변경될 경우 연관된 모든 함수의 타입을 변경해야 한다.
interface Product {
    id: number;
    // id: string;
    name: string;
    price: number;
}

function logProduct(product: Product) {
    const id: number = product.id;
    const name: string = product.name;
    const price: number = product.price;

    console.log(id, name, price);
}

// 타입 추론을 사용하면 타입이 변경되더라도 처리 가능
function logProduct2(product: Product) {
    const {id, name, price} = product;
    console.log(id, name, price);
}

// 위 경우 product 매개변수는 타입스크립트에서 타입을 추론할 때 정보가 부족하기 때문에 명시적 타입 구문이 필요
// 타입스크립트 변수 타입은 일반적으로 처음 등장할 때 결정






export {};