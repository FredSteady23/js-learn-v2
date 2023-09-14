type TypeNameReturn = {
    name: string
}

function getUserName(name: string): TypeNameReturn{
    return { name }
}

type TypeUserNameFunction = (name: string) => TypeNameReturn;

const getUserName2: TypeUserNameFunction = (name: string) => {
    return { name }
}



// Rest operator
const getNumbers = (...numbers: number[]) => {
    return numbers;
}