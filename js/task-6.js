let number;
let total = 0;

while(true){
number = prompt(`Введите число`);

if (number === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
    }

    total += Number(number);
}