// Basic types

// Boolean type
let isCompleted: boolean = false;
isCompleted = true;
// Number type
const decimal: number = 6;
const integer: number = 6.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
// String type
// String type for simple string
// const name: string = 'Yauhen';

//String type for template string
const sentence: string = `Hello, my name is ${ name }`;

//NULL && undefined
// JS
typeof null; // object
typeof undefined // undefined
//TS
const u:undefined = undefined;
const n: null = null;

// Void type
// For function result
const greetUser = (): void => {
    alert('Hello, nice to see you!');
}
// For 'greetUser'
// Error: Type `()=>void` is not assignable to type 'void'
const greetUser: void = () =>{
    alert('Hello, nice to see you');
};


// part 2 Basic Types
// Array Type
let list: number[] = [1,2,3];
// let list: Array<number> = [1,2,3] // Generic Type

// Tuple type
// Multiply lines
let x: [string, number];
x=['hello', 10];

// One line
// let y: [string, number] = ['goodbuy', 42];
// Error case:
// x = [10, 'hello']; // Type 'string' is not assignable to type 'number'

// Any Type
// Any type for array
let y: [any, any] = ['goodbuy', 42];
let z: Array<any> = [10, 'hello'];
// Any type for string
let notSure: any = false;
// Issue case (no error)
notSure = true;    // boolean
notSure = 42;      // number
notSure = 'hello'; //string

// Enum type
enum Directions{
    Up,
    Down,
    Left,
    Right
}
Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;

// Never // Данный тип используется в 2 случаях 
// 1. Когда функция возвращает ошибку и не заканчивается
// 2. Когда функция постоянно выполняется
const msg = 'hello';
const error = (msg:string): never => {
    throw new Error(msg);
};
// Function infinite loop
const infiniteLoop = (): never =>{
    while(true){

    }
};

// Object type
const create = (o: object | null): void =>{};
create(1); // Argument of type '1' is not assignable to parameter of type 'object | null'
create('42') // Argument of type '1' is not assignable to parameter of type 'object | null'
create({ obj:1 }); 
// Multiply types for one value
let id: number | string;
id = 10; // number is valid
id = '42'; // string is valid
id = true; // Type 

// Type
type Name = string; // Custom type creation
let id: Name; // Apply custom type
id='42'; //No error, because type of '42' is a string
id=10; // Type '10' is not assignable to type 'string'