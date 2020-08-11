//  Перевірка піддтримки бравзером формату WEBP
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector("body").classList.add("webp");
   } else {
      document.querySelector("body").classList.add("no-webp");
   }
});
// *********************************************************
// *********************************************************

const cardImg = [
   "six-pik", "six-dz", "six-cer", "six_chr",
   "seven-pik", "seven-dz", "seven-chr", "seven-cer",
   "eight-pik", "eight-dz", "eight-chr", "eight-cer",
   "nine-pik", "nine-cer", "nine-chr", "nine-cer",
   "ten-pik", "ten-dz", "ten-chr", "ten-cer",
   "valet-pik", "valet-dz", "valet-chr", "valet-cer",
   "dama-pik", "dama-dz", "dama-chr", "dama-cer",
   "korol-pik", "korol-dz", "korol-chr", "korol-cer",
   "tuz-pik", "tuz-dz", "tuz-chr", "tuz-cer",
]

function createCart(card) {
   let cart = `<div class="flip-card">
   <div class="flip-card-inner">
     <div class="flip-card-front">
       <img src="/img/back.png">
     </div>
     <div class="flip-card-back">
      <img src="/img/${card}.png">
     </div>
   </div>
 </div>`
   return cart;
}
cardImg.forEach(element => {
   $('.header').append(createCart(element));
}) 