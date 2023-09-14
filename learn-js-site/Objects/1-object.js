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
        ref(){
            return this;
        }
    };
}
let user = makeUser();
console.log(user.ref().name);

// 2 задача
let calc = {
    read(a, b){
        this.a = a;
        this.b = b;
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}
console.log(calc.read(5, 2));
console.log(calc.sum());
console.log(calc.mul());

// 3 задача
let ladder = {
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){ // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down()
// ladder.showStep() // 0