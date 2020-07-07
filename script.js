// Создать страницу, которая выводит нумерованный список песен

// var playList = [

// 	{
// 	 author: "LED ZEPPELIN",
// 	 song:"STAIRWAY TO HEAVEN"
// 	},

// 	{
// 	 author: "QUEEN",
// 	 song:"BOHEMIAN RHAPSODY"
// 	},

// 	{
// 	 author: "LYNYRD SKYNYRD",
// 	 song:"FREE BIRD"
// 	},

// 	{
// 	 author: "DEEP PURPLE",
// 	 song:"SMOKE ON THE WATER"
// 	},

// 	{
// 	 author: "JIMI HENDRIX",
// 	 song:"ALL ALONG THE WATCHTOWER"
// 	},

// 	{
// 	 author: "AC/DC",
// 	 song:"BACK IN BLACK"
// 	},

// 	{
// 	 author: "QUEEN",
// 	 song:"WE WILL ROCK YOU"
// 	},

// 	{
// 	 author: "METALLICA",
// 	 song:"ENTER SANDMAN"
// 	}

// ];

// let ol = document.getElementById('myList');

// for( let myList of playList) {
// 	let li = document.createElement('li')
// 	let txt = document.createTextNode(`${myList.author} : ${myList.song}`);
// 	li.appendChild(txt);
// 	ol.appendChild(li);
// }

// Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// var modal = document.getElementById("my_modal");
// var btn = document.getElementById("btn_modal_window");
// var span = document.getElementsByClassName("close_modal_window")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
