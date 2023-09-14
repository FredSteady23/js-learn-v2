// TypeScript позволяет определять псевдонимы типов с помощью ключевоо слова type
type id = string | number;
let userId: id = 2;
console.log(`Id: ${userId}`);
userId = 'qwerty';
console.log(`Id: ${userId}`);

// Псевдонимы могут применятсья для определения типа параметров и результата функции
// Определяем псевдоним
type id2 = number | string;
// параметр функции представляет псевдоним
function printId(inputId: id){
    console.log(`Id: ${inputId}`);
}
// тип результата - псевдоним
function getId(isNumber: boolean):id{
    if(isNumber) return 1;
    else return '1';
}
// применение функций
printId(12345);
printId('qwerty');
console.log(getId(true));

//Особенно полезны могут псевдонимы, когда мы имеем дело со сложными объектами:
type Person = {name: string; age: number};
let tom: Person = {name: "Tom", age: 36};
let bob: Person = {name: "Bob", age: 41};
function printPerson(user: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
printPerson(tom);
printPerson(bob);


// Расширение псевдонимов
// Одни псевдонимы могут заимствовать или расширять код других. Для этого применяется операция &. Например:
type Person2 = {name: string; age: number};
type Employee2 = Person2 & {company: string};
// То есть фактически мы имеем дело с типом:
type Employee3 = {name: string; age: number; company: string};


// Применение будет аналогично применению обычных псевдонимов:
type Person3 = {name: string; age: number};
// расширяем псевдоним Person
type Employee4 = Person3 & {company: string};
let tom2: Person = {name: "Tom", age: 36};
let bob2: Employee3 = {name: "Bob", age: 41, company: "Microsoft"};
function printPerson2(user: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
printPerson(tom);
printPerson(bob);  // bob представляет Employee, но он также соответствует псевдониму Person