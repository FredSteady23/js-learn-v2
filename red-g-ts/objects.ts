// Red Group channel
type TypeUser = {
    name: string,
    age: number,
    isMarried: boolean
};

type TypeAddress = {
    city: string,
    address: string
}

const user: TypeUser = {
    name: "Sagyndyk",
    age: 21,
    isMarried: false
} 

const address: TypeAddress = {
    city: 'Uralsk',
    address: 'Remzavod'
}

//spread operator
let common: TypeUser & TypeAddress;

common = {
    ...user, ...address
}
