// 1 задача
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// 2 задача
let shedule = {};
console.log(isEmpty(shedule)); //true
shedule['8:30'] = 'get up';
console.log(isEmpty(shedule)); //falses
function isEmpty(obj){
    for(let key in obj){
        if(obj[key])return false;
    }
    return true;
};

// 3 задача
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum+=salaries[key];
}
console.log(sum);

// 4 задача
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

// Пример // Object.assign(куда хотим копировать, объекты с которых хотим скопировать данные)
let user= {
    isAdmin: true
}
let admin={
    isAdmin: false,
    isUser:true
}
Object.assign(user, admin);
console.log(user);
// Он копирует все свойства user в пустой объект и возвращает его
let clone = Object.assign({}, user);
console.log(clone);
// Вложенное клонирование
//_.cloneDeep(obj) библиотека lodash


// this // У стрелочных функции нет this
let user = {
    firstName:'Ilya',
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow();
    }
}
user.sayHi();

// 1 задача
function makeUser(){
    return{
        name:'John',
        ref:this
        //
    }
}