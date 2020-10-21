'use strict';
const inputList = document.querySelectorAll('.js-fill__input');
// const cardValue = document.querySelectorAll('.js__card--value');
let data = {
  fullName: 'Barry Allen - Flash',
  job: 'The fastest man alive',
  mail: '',
  telephone: '',
  linkedin: '',
  github: '',
};
const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  const idCards = `#js-${event.currentTarget.id}-card`;
  const el = document.querySelector(idCards);
  if (el.nodeName !== 'A') {
    el.innerHTML = event.currentTarget.value;
  } else {
    el.href = event.currentTarget.value;
  }
  
}


// function render(event){
//   const idCards = `#js-${event.currentTarget.id}-card`;
//   // document.querySelector(idCards).innerHTML = event.currentTarget.value;
//   const el = document.querySelector(idCards);
//   if (el.nodeName !== 'A') {
//     el.innerHTML = event.currentTarget.value;
//   } else {
//     el.href = event.currentTarget.value;
//   }
  
// }
//
for (const eachElement of inputList) {
  eachElement.addEventListener('input', saveField);
}

const shareLink = document.querySelector('.js-link');
const btnTwitter = document.querySelector('.js-share');
const clickShare = document.querySelector(".js-share__button");
const openTwitter = function (event) {
  event.preventDefault();
  shareLink.classList.add("js__show");
  clickShare.classList.add("shareSent");
};
btnTwitter.addEventListener('click', openTwitter);

// RESET
const resetBtn = document.querySelector(".js-sectionOneBtn");
 const cleanCard = function (){
   for (const input of inputList){
    input.innerHTML = "Hola";
   }
  }
resetBtn.addEventListener("click", cleanCard);