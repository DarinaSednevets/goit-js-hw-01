const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt(`Напишите свой пароль`);
if (ADMIN_PASSWORD === message) {
    console.log(`Добро пожаловать!`);
}  else if (message === null){
    console.log(`Отменено пользователем!`);
} else if (ADMIN_PASSWORD !== message) {
    console.log(`Доступ запрещен, неверный пароль!`);
}
alert(message);

