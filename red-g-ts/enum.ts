enum EnumRoles{
    ADMIN, GUEST, USER
}

const enum EnumColors{
    black, pink, green
}

interface IUser{
    role: EnumRoles
    color: EnumColors
}

const user5: IUser = {
    role: EnumRoles.ADMIN,
    color: EnumColors.black,
    // name: "",
    // email: "",
    // age: 0
}


