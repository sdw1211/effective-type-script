let id: string|number = '12-34-56';
fetchProduct(id);

id = 123456;

fetchProductBySerialNumber(id);


// 위와 같이 할 경우 항상 id가 숫자인지 문자인지 체크하는 로직을 넣어줘야 한다.
// 별도의 변수로 나누는 것이 낫다.

const id2 = '12-34-56';
const serial = 123456;






export {};