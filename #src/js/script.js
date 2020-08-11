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
   "seven-pik", "seven-dz", "seven-cer", "seven-chr",
   "eight-pik", "eight-dz", "eight-cer", "eight-chr",
   "nine-pik", "nine-cer", "nine-cer", "nine-chr",
   "ten-pik", "ten-dz", "ten-cer", "ten-chr",
   "valet-pik", "valet-dz", "valet-cer", "valet-chr",
   "dama-pik", "dama-dz", "dama-cer", "dama-chr",
   "korol-pik", "korol-dz", "korol-cer", "korol-chr",
   "tuz-pik", "tuz-dz", "tuz-cer", "tuz-chr",
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
   $('.container').append(createCart(element));
}) 