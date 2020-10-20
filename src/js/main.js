'use strict';

console.log('>> Ready :)');

const shareEl = document.querySelector(".js-share");
const shareBtn = document.querySelector(".js-share__button");
function createCard(){
  shareBtn.classList("shareSent");
}

shareBtn.addEventListener("click", createCard);