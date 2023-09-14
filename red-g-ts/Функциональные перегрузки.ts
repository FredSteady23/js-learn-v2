// Перегрузка функции

function getCar(name: string): string;
function getCar(name: string, price: number): string;
function getCar(name: string, price?: number): string{
    return price ? `Название ${name} и цена ${price}` : `Название ${name}`;
}

const getCar1 = getCar('bmw');
const getCar2 = getCar('bmw', 10000);
// const getCar3 = getCar('bmw', 10000, name);