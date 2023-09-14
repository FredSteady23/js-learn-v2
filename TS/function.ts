// При этом функция может не только использовать передаваемые параметры но и глобальные переменные, определенные вне
let koef = 1.5;
function add(a: number){
    let result = a * koef;
    console.log(result);
}
add(10);

// Если функция ничего не возвращает, то указывается тип void
function add2(a: number, b:number): void{
    console.log(a+b);
}
add2(10, 10);

// В принципе мы можем и не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения
function add3(a: number, b: number){
    return a+b;
}
let result = add3(10, 10);


// Необязательные параметры
function getName(firstName: string, lastname?: string){
    if(lastname) return firstName + ' ' + lastname;
    else return firstName; 
}
let name1 = getName('Sagyndyk', 'Islyam');
let name2 = getName('Sagyndyk');


// Значения параметров по умолчанию
function getName2(firstName: string, lastname: string = 'Islyam'){
    return firstName + ' ' + lastname;
}
getName('Sagyndyk', 'Islyam');
getName('Sagyndyk');

// Причем в качестве значения можно передавать результат другого выражения
function defaultName(): string{
    return 'Islyam';
}
function getName3(firstName: string, lastname: string = defaultName()){
    return firstName + ' ' + lastname;
}
let name4 = getName3('Sagyndyk');
console.log(name4);



// Тип функции
function hello(){
    console.log('Hello TypeScript');
};
let message: ()=>void = hello;
message(); // Hello TypeScipt

function sum(x: number, y: number): number {
    return x+y;
}
function subtract(a: number, b: number): number{
    return a-b;
}
let op: (x: number, y: number) => number;
op = sum;
console.log(op(2,4)); // 6
op = subtract;
console.log(op(6,4)); // 2


// CallBack
function sum2(x: number, y: number){
    return x+y;
}
function multiply2(a: number, b: number){
    return a*b;
}
function mathOp(x: number, y: number, op:(a:number, b:number)=> number):number{
    return op(x, y);
}
console.log(mathOp(10, 20, sum));
console.log(mathOp(10, 20, multiply2));



// Arrow function
const sum3 = (x: number, y: number) => x+y;
const result2 = sum3(15, 35); // 50
console.log(result2);
// Тип параметров можно опускать
const sum4 = (x,y) => x+y;
const result3 = sum4(15, 35); // 50
console.log(result3);
// Если стрелочная функция не требует параметров, то используется пустые круглые скобки.
// Если передается только один параметр, то скобки можно опустить
const square = x => x*x; 
const hello2 = () => 'hello world';
console.log(square(5)); // 25
console.log(hello2()); // hello world


const sum5 = (x: number, y: number) =>{
    x*=2;
    return x + y;
}
const result4 = sum5(15, 35); // 65
console.log(result4);

// Стрелочные функции можно передавать в функцию вместо параметров, который представляет собой функцию
function mathOp2(x: number, y: number, operation:(a:number, b:number)=>number):number{
    const result = operation(x,y);
    return result;
}
console.log(mathOp2(10,20, (x,y)=> x+y)); // 30
console.log(mathOp2(10,20, (x,y)=> x*y)); // 200