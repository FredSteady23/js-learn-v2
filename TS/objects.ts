// Объект
let person = {name:'Tom', age:23};
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person['name']);
// person = {name:'Bob'} // Error // Поскольку компилятор после первой строки предпологает что объект person будет иметь два свойства name/age


let person2: {name: string, age: number} = {name:'Tom', age:23};
console.log(person2.name);
// Поэтому данной переменной мы можем присвоить другой объект, который соотвестует типу name/age по названиям, количеству и типу свойств
let person3 = {name:'Tom', age:23};
person3 = {name:'Sagyndyk', age:21}; // Норм

// Необязательные свойства
// ТайпСкрипт позволяет сделать свойства необязательными. Для этого после названия свойства указывается знак вопроса ?
let person4: {name:string, age?:number}; // Свойства age - необязательно
person4 = {name: 'Tom', age: 23}; 
console.log(person4.name); // Tom
person4 = {name: 'Bob'}; // Норм, свойства age - необязательное
console.log(person4.name); // Bob

// При обращении к неустановленному свойству мы получим undefined
person4 = {name: 'Bob'};
console.log(person4.age) // undefined

// Поэтому при операциях с таким свойством мы можем проверять его на значение undefined
let person5: {name:string, age?:number} = {name:'Tom', age:23};
if (person5.age !== undefined){
    console.log(person5.age);
}


// Объекты в функциях
// Функция может принимать объекты в качестве параметров и могут возвращать объект
function printUser(user: {name:string, age:number}){
    console.log(`name: ${user.name} age: ${user.age}`);
}
let tom = {age:36, name: 'Tom'}; // отправляется объект и печатается свойства объекта
printUser(tom);
// При этом объект передаваемый в качестве параметра может быть более широким - содержать больше свойств
function printUser2(user: {name:string, age:number}){
    console.log(`name: ${user.name} age: ${user.age}`); 
}
let bob = {age:36, name: 'Bob', isMarried: true}; // отправляется объект и печатается свойства объекта
printUser2(bob);



// Оператор in
let tom2: {name:string, age?:number} = {age:36, name: 'Tom'};
let bob2: {name:string} = {name: 'Bob'};

function printUser3(user:{name:string, age?:number}){
    if ('age' in user) console.log(`name: ${user.name} age: ${user.age}`);
    else console.log(`name: ${user.name}`);
}
printUser3(tom2);
printUser3(bob2);


// Декомпозиция объектов параметров
function printUser4({name, age}: {name: string, age: number}){
    console.log(`name: ${name} age: ${age}`);
}

let tom4 = {name: 'Tom', age:36};
printUser4(tom4);

function printUser5({name, age=25}: {name: string, age?:number}){
    if(age!==undefined) console.log(`name: ${name} age: ${age}`);
    else console.log(`name: ${name}`);
}
let tom5 = {name: 'Tom', age:36};
printUser5(tom5);
let bob5 = {name: 'Bob'};
printUser5(bob5);