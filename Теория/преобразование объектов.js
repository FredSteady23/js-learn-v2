let user = {}; // пользователь без свойства "address"
alert(user.address.street); // Ошибка!

let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

let html = document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет

let user = null;
alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// Переменная перед ?. должна быть объявлена
// Если переменной user вообще нет, то user?.anything приведёт к ошибке:
// // ReferenceError: user is not defined
// user?.address;

let userAdmin = {
    admin() {
      alert("Я админ");
    }
  };
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)


let key = "firstName";
let user1 = {
  firstName: "John"
};
let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

// // Мы можем использовать ?. для безопасного чтения и удаления, но не для записи
// // Опциональная цепочка ?. не имеет смысла в левой части присваивания.
// // Например:
// let user = null;
// user?.name = "John"; // Ошибка, не работает
// // то же самое что написать undefined = "John"