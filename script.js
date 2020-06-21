// ************ № 1 **************

// var x = Number(prompt("Введи початок діапазону", ""));
// var y = Number(prompt("Введи кінець діапазону", ""));
// var sum = 0;

// while (x <= y) {
//    sum += x;
//    x++;
// }
// alert(sum);

// ************ № 2 **************

// let x = prompt("Enter x:");
// let y = prompt("Enter y:")
// function gcd(x, y) {
//    while (y !== 0) y = x % (x = y);
//    return x;
// }
// console.log(gcd(x, y));

// ************ № 3 **************

// let a = prompt('Enter number:');
// let result_a = 0;
// for (i = 1; i <= a; i++) {
//    result_a = a / i;
//    if ((a % i) == 0) {
//       console.log(result_a);
//    }
// }

// ************ № 4 **************

// let a = prompt("Enter number:");
// console.log('У змінній a %s знаків', a.length);

// ************ № 5 **************

// let num = prompt('Enter num:');
// let pos = 0;
// let neg = 0;
// let zero = 0;
// let pair = 0;
// let nopair = 0;

// for (let i = 0; i <= num.length; i++) {

//    if (num[i - 1] == "-") {
//       neg++;
//    } else if (num[i] == 0) {
//       zero++;
//    } else if (num[i] > 0) {
//       pos++;
//    }
//    if (num[i] % 2 == 0 && num[i - 1] != "-" && num[i] > 0) {
//       pair++;
//    } else if (num[i] % 2 != 0 && num[i - 1] != "-" && num[i] > 0) {
//       nopair++;
//    }
// }
// console.log("Позитивні = " + pos);
// console.log("Нулі = " + zero);
// console.log("Негативнi = " + neg);
// console.log("Парні = " + pair);
// console.log("Непарні = " + nopair);

// ************ № 6 **************

// let choose = '';

// while (choose !== null) {

//    choose = prompt('Рахуємо?')
//    if (choose == null) break;

//    let a = prompt("Введи 1-ше число:");
//    let b = prompt("Введи 1-ше число:");
//    let operator = prompt("Вибери оператор + - * /");
//    let result;

//    switch (operator) {
//       case '+':
//          result = +a + +b;
//          break;
//       case '-':
//          result = +a - +b;
//          break;
//       case '*':
//          result = +a * +b;
//          break;
//       case '/':
//          result = +a / +b;
//          break;
//       default:
//          alert('вибери оператор!');
//    }
//    console.log(result);
// }

// ************ № 7 **************

// let count = prompt('Введите число', '')
// let step = +prompt('На сколько сдвинуть', '0')
// arr = count.split('');

// for (let i = 0; i < step; i++) {
//    arr.push(arr.shift())
// }
// alert(arr.join``);

// ************ № 8 **************

// const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хочеш побачити наступний день?`)) {
//    currDay = (currDay + 1) % days.length;
// }

// ************ № 9 **************

// for (let x = 1; x <= 9; x++) {
//    for (let y = 1; y <= 9; y++) {
//       document.write(x + "*" + y + "=" + (x * y) + "<br>");
//    }
//    document.write("<br>");
// }

// ************ № 10 *************

// alert('Загадай число від 0 до 100');
// let N = 100;
// let my = true;

// N = Math.floor(N / 2);
// while (my != null) {
//    my = prompt('більше ' + N + ' напиши 1;\nменше ' + N + ' напиши 2;\nдорівнює ' + N + ' натисни 3');
//    if (my == 3) {
//       alert('Ваше число ' + N);
//       break;
//    } else if (my == 1) {
//       N++;
//    } else if (my == 2) {
//       N = Math.floor(N / 2);
//    }
// }
