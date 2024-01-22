// 

let age:number = 1;

age = '12';
age  = '12' as any;

age += 1;

// 결과가 121
// 혼돈의 카오스로..
console.log(age);

function calculateAge(a: Date): number {
    return 0;
}

let birth:any = '2333333';

// 에러가 트랜스파일 단계에서 발생하지 않음
// 런타임에서 에러 발생
calculateAge(birth);


interface ComponentProps {
    // onSelectItem: (item: any) => void;
    onSelectItem: (id: number) => void;
}

function renderSelector(props: ComponentProps) {

}

let selectedId: number = 0;
function handleSelectItem(item: any) {
    selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});




export {};