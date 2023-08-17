// Владилен Минин
const person = {
    name: 'Sagyndyk',
    age: 21,
    isProgrammer: true,
    languages: ['ru', 'en', 'kz'],
    // 'complex key': 'complex value',
    // ['key_' + (1 + 3)]: 'computed key', // key_4
    greet(){
        console.log('greet from person');
    },
    info(){
        // console.log('this:', this);
        console.info('информация про человека по имени:', this.name);
    }
}

// console.log(person.name);
// const ageKey = 'age'
// console.log(person[ageKey]);
// console.log(person['complex key']);

// console.log(person);
// person.greet();

// person.age++;
// person.languages.push('de');
// console.log(person);

// person['key_4'] = undefined;
// delete person['key_4'];
// console.log(person);



// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 102, languages} = person;

// console.log(name, personAge, languages); // Sagyndyk 21 [ 'ru', 'en', 'kz' ]


// console.log(person);

// for (let key in person){ // for..in опасен мб зайти в прототип
//     if(person.hasOwnProperty(key)){    
//     console.log('key:', key);
//     console.log('value', person[key]);
//     }
// }


// const keys = Object.keys(person); // Не бегает по прототипу
// console.log(keys); // [ 'name', 'age', 'isProgrammer', 'languages', 'greet' ]

// keys.forEach((key)=>{
//     console.log('key:', key);
//     console.log('value', person[key]);
// });



// Context
// person.info();

const logger = {
    keys(){
        console.log('Object keys: ', Object.keys(this));
    },
    keysAndValues(){
        Object.keys(this).forEach(key=>{ // Стрелочная функция не создает свой контекст
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false){
        if(top){
            console.log('--------Start---------');
        }
        Object.keys(this).forEach((key, index, array)=>{
            console.log(`"${key}": ${this[key]}`)
            if(between && index !== array.length-1){
                console.log('--------Between---------');
            }
        });
        if(bottom){
            console.log('--------Bottom---------');
        }
    }
}
// logger.keysAndValues.call(person);
// const bound = logger.keys.bind(person); // Object keys:  [ 'name', 'age', 'isProgrammer', 'languages', 'greet', 'info' ]
// bound();
// logger.keys.call(person); // Object keys:  [ 'name', 'age', 'isProgrammer', 'languages', 'greet', 'info' ]
// logger.keysAndValues.call(person);

logger.withParams.call(person, true, true, true);

// --------Start---------
// "name": Sagyndyk
// --------Between---------
// "age": 21
// --------Between---------
// "isProgrammer": true
// --------Between---------
// "languages": ru,en,kz
// --------Between---------
// "greet": greet(){
//         console.log('greet from person');
//     }
// --------Between---------
// "info": info(){
//         // console.log('this:', this);
//         console.info('информация про человека по имени:', this.name);
//     }
// --------Bottom---------