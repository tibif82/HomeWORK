// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let myCar = {
//   maker: "Toyota",
//   model: "rav4",
//   prod: 2019,
//   speed: 110,
// };

// printCar(myCar);
// count(800);

// function printCar(nameObj) {
//   console.table(nameObj);
// }

// function count(distance) {
//   let time = Math.ceil((distance / myCar.speed) * 100);
//   if (time / 60 > 4) {
//     quantPause = Math.floor(time / 60 / 4);
//     time += 60 * quantPause;
//   }
//   console.log(`${time} хв.`);
// }

// =================================================================

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

// let fraction = [
//   { nom: 3, denom: 16 },
//   { nom: 2, denom: 17 },
// ];

// addition(fraction[0], fraction[1]);
// subtraction(fraction[0], fraction[1]);
// multiplication(fraction[0], fraction[1]);
// division(fraction[0], fraction[1]);

// function addition(first, second) {
//   let etap1 = (first.nom * second.denom) / (first.denom * second.denom);
//   let etap2 = (second.nom * first.denom) / (second.denom * first.denom);
//   let addResult = etap1 + etap2;
//   console.log(addResult);
// }
// function subtraction(first, second) {
//   let etap1 = (first.nom * second.denom) / (first.denom * second.denom);
//   let etap2 = (second.nom * first.denom) / (second.denom * first.denom);
//   let subResult = etap1 - etap2;
//   console.log(subResult);
// }
// function multiplication(first, second) {
//   let multResult = (first.nom * second.nom) / (first.denom * second.denom);
//   console.log(multResult);
// }
// function division(first, second) {
//   let devResult = (first.nom * second.denom) / (first.denom * second.nom);
//   console.log(devResult);
// }

// =====================================================================

// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов.

let now = new Date();
// alert(now);

// changeSec(70);
// changeMin(25);
// changeHours(8);

// function changeSec(s) {
//   now.setSeconds(now.getSeconds() + s);
//   console.log(
//     `${now.getHours()}год. ${now.getMinutes()}хв. ${now.getSeconds()}сек.`
//   );
// }
// function changeMin(m) {
//   now.setMinutes(now.getMinutes() + m);
//   console.log(
//     `${now.getHours()}год. ${now.getMinutes()}хв. ${now.getSeconds()}сек.`
//   );
// }
// function changeHours(h) {
//   now.setHours(now.getHours() + s);
//   console.log(
//     `${now.getHours()}год. ${now.getMinutes()}хв. ${now.getSeconds()}сек.`
//   );
// }
