const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice ;
let restOfMoney;

message = prompt(`Какое количество дроидов вы хотите купить?`);
if (message === null) {
    console.log(`Отменено пользователем!`);
} else if (message !== NaN){
    console.log(`Цена за ${message} дроидов составит `, totalPrice = message * pricePerDroid );
} 


if (credits >= totalPrice) {
    console.log(`Вы купили ${message} дроидов, на счету осталось ${restOfMoney = credits - totalPrice} кредитов.`)
} else if (credits < totalPrice) {
    console.log(`Недостаточно средств на счету!`);
}