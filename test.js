// const tovar = [
//   { name: "Огірки", amount: 2, price: 28 },
//   { name: "Помідори", amount: 3, price: 30 },
//   { name: "Яблука", amount: 1, price: 22 },
//   { name: "Риба", amount: 2, price: 55 },
//   { name: "Телятина", amount: 1, price: 75 },
// ];
// *******************************************
// *******************************************

// function getSum(array) {
//   console.log("ТОВАРНИЙ ЧЕК");
//   let countPrice,
//     sum = 0;
//   for (let key in array) {
//     countPrice = array[key].amount * array[key].price;
//     sum += countPrice;
//     console.log(array[key].name + " " + countPrice + " " + "грн.");
//   }
//   return sum;
// }
// let tovar1 = getSum(tovar);
// console.log(`Загальна сума: ${tovar1} грн.`);

// *************************************************
// const itemShop = tovar.map((tovar) => {
//   let countShop;
//   return (countShop = tovar.amount * tovar.price);
// });
// let max = Math.max.apply(null, itemShop);
// console.log(`Найдороща покупка: ${max} грн.`);
// *************************************************
// function average(arr) {
//   return arr.reduce((a, b) => a + b) / arr.length;
// }

// let avePrice = average(itemShop);
// console.log(`Середня ціна товару: ${avePrice} грн.`);

// *******************************************
// *******************************************
// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// *******************************************

// let myStyle = new Map([
//   ["color", "blue"],
//   ["font-size", "2em"],
//   ["text-align", "center"],
//   ["text-decoration", "underline"],
// ]);
// // console.log(myStyle);

// myStyle.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });
// // *********************************************

// function changeText(myText, myStyle) {
//   document.write(myText);
// }
// changeText("HELLO, I am JavaScript");

// let myStyle = (one.style.cssText = `color: red;
// font-size: 2em;
// text-align: center;
// text-decoration: underline;
// `);

// **************************************************

// const myStyle = [
//   { "font-size": "24px" },
//   { color: "red" },
//   { "text-align": "center" },
//   { "text-decoration": "underline" },
// ];
// console.table(myStyle);

// function changeText(myText, styleObj, selector) {
//   let t = document.querySelector(selector);
//   t.innerHTML = myText;
//   for (let value of styleObj) {
//     t.style[Object.keys(value)[0]] = Object.values(value)[0];
//   }
// }
// changeText("Lorem Ipsum", myStyle, "#one");

// const myObj = {
//   name: "Ivan",
//   age: 32,
//   gender: "male",
// };
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));

// function myFun(myText, myObj) {
//   let style = "";
//   for (let value of myObj) {
//     style += `${Object.keys(value)[0]}:${Object.values(value)[0]};`;
//   }
//   document.write(`<p style = "${style}">${myText}</p>`);
// }

// myFun("Lorem Ipsum", myStyle);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// let c = [...a, ...b];
// let d = [a, b];

// console.log(c);
// console.log(d);

// *******************************************************************
// *******************************************************************

// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним

//     Вывод на экран всех аудиторий;
//     Вывод на экран аудиторий для указанного факультета;
//     Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
//     Функция сортировки аудиторий по количеству мест;
//     Функция сортировки аудиторий по названию (по алфавиту).

// ********************************************************************
// const audAcademy = [
//   {
//     name: "Північна",
//     amount: 14,
//     facultet: "Економічний",
//   },
//   {
//     name: "Західна",
//     amount: 20,
//     facultet: "Філосовський",
//   },
//   {
//     name: "Південна",
//     amount: 16,
//     facultet: "Педагогічний",
//   },
//   {
//     name: "Східна",
//     amount: 18,
//     facultet: "Природничий",
//   },
// ];

// ****** Вывод на экран всех аудиторий ******
// function adt(room) {
//   const auditory = audAcademy.map((audAcademy) => {
//     return `${audAcademy.name} : ${audAcademy.facultet}`;
//   });
//   console.table(auditory);
// }
// adt(audAcademy);

// function getAud(facName) {
//   let aud = prompt("Назва аудиторії");
//   switch (aud) {
//     case "Північна":
//       alert("Економічний");
//       break;
//     case "Південна":
//       alert("Педагогічний");
//       break;
//     case "Західна":
//       alert("Філософський");
//       break;
//     case "Східна":
//       alert("Природничий");
//       break;
//   }
// }
// getAud();

// ***************************************************************************

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;

// function getAud(facGroup) {
//   let group = prompt("Назва групи");
//   switch (group) {
//     case "Економісти":
//       alert("Північна");
//       break;
//     case "Педагоги":
//       alert("Південна");
//       break;
//     case "Філософи":
//       alert("Західна");
//       break;
//     case "Екологи":
//       alert("Східна");
//       break;
//   }
// }
// getAud();

//****** Функция сортировки аудиторий по количеству мест ******
// audAcademy.sort(function (a, b) {
//    return a.amount - b.amount;
//  });
// //****** Функция сортировки аудиторий по названию (по алфавиту)*****
// audAcademy.sort(function(a, b) {
//    return a.name - b.name;
// })
