interface IAge {
    age: number
}

interface IUser extends IAge{
    name: string
    email: string
}

type TypeUser2 = {
    name: string
    email: string
} & TypePerson

type TypePerson= {
    age: number
}

// Разница
const user3: IUser = {
    name: 'Sagyndyk',
    email: 'idinax@test.com',
    age:21
}
// разница субъективна
const user4: TypeUser2 = {
    name: 'Sagyndyk',
    email: 'idinax@test.com',
    age: 21
}

// const users: IUser[] = [user, {
    // age:
// }]
