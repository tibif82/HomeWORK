// let age = prompt('What is your age?');

// if (age <= 2) {alert ('Ви дитина');}

// else if (age <= 18) {alert('Ви підліток');}

// else if (age <= 60) {alert('Ви дорослий');}

//else if (age > 60) {alert('Ви пенсіонер');}

// *******************************************************

//let key = prompt('Натисни клавішу від 1 до 9');
//
//switch(key){
//    case "1":
//        alert ( "\u{0021}" );
//        break;
//    case "2":
//        alert ("\u{0040}");
//        break;
//    case "3":
//        alert ("\u{0023}")
//        break;
//    case "4":
//        alert ("\u{0024}")
//        break;
//    case "5":
//        alert ("\u{0025}")
//        break;
//    case "6":
//        alert ("\u{005E}")
//        break;
//    case "7":
//        alert ("\u{0026}")
//        break;
//    case "8":
//        alert ("\u{002A}")
//        break;
//    case "9":

//        alert ("\u{0028}")
//        break;
//    case "0":
//        alert ("\u{0029}")
//        break;
//}

// **************************************************

// let str = prompt ('Введіть тризначне число');
// let text = 'Однакових цифр в числі немає';
// for (let j = 0; j < str.length; j++)
// 	{
// 	if (str.split (str [j]).length > 2) {text = 'В числі присутні однакові цифри'; break;}
// 	}
// alert (text);

// **************************************************

// function isLeapYear(year) {
//    var f29 = new Date(year, 1, 29)
//    return (f29.getMonth() == 1);
// }

// var year = +prompt("Введи рік:");
// if (isNaN(year)) {
//    alert("Потрібно ввести ціле число")
// }
// if (isLeapYear(year)) {
//    alert("Рік " + year + " - високосний.");
// } else {
//    alert("Рік " + year + " - не високосний.");
// }

// **************************************************

// function palindrome(str) {
//    str = str.toLowerCase();
//    return str == str.split('').reverse().join('');
// }
// var num = prompt('Ввди пятизначне число');
// alert(palindrome(num));

// **************************************************

// alert("Ласкаво просимо в конвертер валют");
// var currency = prompt("Введи сумму в доларах:");
// const choice = prompt("Виберіть валюту: 1 - EUR 2 - UAH 3 - AZN");

// switch (choice) {
//    case "1":
//       alert('У вас ' + (currency * 0.89) + ' доларів');
//       break;
//    case "2":
//       alert('У вас ' + (currency * 26.57) + ' доларів');
//       break;
//    case "3":
//       alert('У вас ' + (currency * 0.59) + ' доларів');
//       break;
// }

// **************************************************

// let purchase = prompt("Введи суму покупки:");

// if (purchase <= 300) {
//    alert('До оплати ' + (purchase - (purchase * 0.03)) + ' знижка 3%')
// }
// else if (purchase <= 500) {
//    alert('До оплати ' + (purchase - (purchase * 0.05)) + ' знижка 5%')
// }
// else if (purchase > 500) {
//    alert('До оплати ' + (purchase - (purchase * 0.07)) + ' знижка 7%')
// }

// **************************************************

// let P = prompt("Введи периметр квадрата!");
// let L = prompt("Введи довжину окружності");

// let a = P / 4;
// let r = L / (2 * Math.PI);

// console.log(a);
// console.log(r);

// if (r <= a * 0.5) {
//    alert("Окружність вписана у квадрат")
// }
// else {
//    alert("Окружність не вписана в кввадрат")
// }

// **************************************************
// alert("Дайте відповіді на 3 запитання:");
// var sum = 0;
// alert("Назвіть столицю Білорусі:");

// let q1 = prompt(" 1 - Гомель 2 - Мінск 3 - Брест");
// switch (q1) {
//    case "1":
//       sum += 0;
//       break;
//    case "2":
//       sum += 2;
//       break;
//    case "3":
//       sum += 0;
//       break;
// }

// alert("Найшвидший хижий птах на Планеті:");
// let q2 = prompt(" 1 - Сапсан 2 - Шуліка 3 - Скопа");
// switch (q2) {
//    case "1":
//       sum += 2;
//       break;
//    case "2":
//       sum += 0;
//       break;
//    case "3":
//       sum += 0;
//       break;
// }

// alert("Найвища будівля знаходиться..");
// let q3 = prompt(" 1 - США 2 - Сінгапур 3 - ОАЕ");
// switch (q3) {
//    case "1":
//       sum += 0;
//       break;
//    case "2":
//       sum += 0;
//       break;
//    case "3":
//       sum += 2;
//       break;
// }

// alert(`У вас ${sum}`);

// **************************************************

// function newDt(_year, _month, _day) {
//    var d = new Date(_year, _month, _day);
//    d.setDate(d.getDate() + 1);
//    return d;
// }
// let year = prompt("input year");
// let month = prompt("input month");
// let day = prompt("input day");

// alert(newDt(year, month, day));
