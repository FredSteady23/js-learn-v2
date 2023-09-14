function User(name){
    this.name = name;

    this.sayHi = function(){
        console.log(`Меня зовут ${this.name}`);
    };
}

let john = new User('John');

john.sayHi(); // Меня зовут John

/*
john = {
    name: 'John',
    sayHi: function(){...}
}
*/

// Задача 1
function Calculator(){
    this.read  = function(){
        this.a = 5
        this.b = 5
    };
    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();
console.log('Sum='+calculator.sum());
console.log('Mul='+calculator.mul());

// Задача 2
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += 5;
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);