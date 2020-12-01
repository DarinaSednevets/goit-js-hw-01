let country = prompt(`В какую страну хотите оформить доставку?`);
let price;
let message;

if (country === null) {
    message = (`Отменено пользоватилем!`);
} else {
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

switch (country) {
    case `Китай`:
        price = 100;
        break;
    
    case `Чили`:
        price = 250;
        break;
    
    case `Австралия`:
        price = 170;
        break;
    
    case `Индия`:
        price = 80;
        break;
    
    case `Ямайка`:
        price = 120;
        break;

    default:
        message = (`В вашей стране доставка не доступна`);
        break;
     }
}
if (price) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(message);


