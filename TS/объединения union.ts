let id: number | string;
id = '12323';
console.log(id); // 12323
id = 123;
console.log(id) // 123

// Подобным образом можно использовать union для определения параметров функции
function printId(id: number | string){
    console.log(`ID: ${id}`);
}
printId('123dsfsdf');
printId(9876);
let id2: string | number = 'ruy74';
printId(id2);

function printSentence(words: string[]|string){
    // Если строка
    if (typeof words === 'string') console.log(words);
    // Если массив строк
    else console.log(words.join(' '));
}
printSentence('Ислям Сагындык');
printSentence(['Ислям','Сагындык']);