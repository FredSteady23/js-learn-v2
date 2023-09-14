let list: string[] = ['a', 'b', 'c'];
let colors: number[] = [1,2,3];

let name2: Array<string> = ['string', 'string', 'string'];


// Readonly Array
// Массивы позволяет изменять значения своих элементов
const people = ['Tom', 'Kate', 'Same'];
people[1] = 'Bob';
console.log(people[1]); // Bob

// Тайпскрипт позволяет определять массивы элементы которых нельзя изменять
// В отличии от типа Array для типа ReadonlyArray<>, мы не можем принимать конструктор, как в следующем случае
// const people2: ReadonlyArray<string> = new ReadonlyArray('Tom', 'Bob'); // Error

const people2: ReadonlyArray<string> = ['Tom', 'Bob'];
// Сокращенный вариант readonly
const people3: readonly string[] = ['Tom', 'Bob'];

// Все остальные операции, которые предусматриают чтение массива, мы по прежнему можем использовать
function printUsers(users: readonly string[]){
    for(const user of users){
        console.log(user);
    }
}
function usersToString(users: ReadonlyArray<string>):string{
    return users.join(', ');
}

const people4: readonly string[]= ['Tom', 'Bob', 'Sam'];
printUsers(people4);
console.log(usersToString(people4));



// Декомпозиция массивов
// Как и в JS массивы поддерживают декомпозицию на константы и переменные
const people5: string[] = ['Tom', 'Bob', 'Sam'];
const [first, ...rest] = people5;
console.log(first);
console.log(rest[0]);
console.log(rest[1]);
const [,second,] = people5;
console.log(second);