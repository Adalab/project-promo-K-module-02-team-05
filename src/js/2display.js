//Design
"use strict";
const btnDesign = document.querySelector('.js__designRotate');
const displayable = document.getElementsByClassName('js__displayNone');

const opendesign = function () {
  displayable[0].classList.toggle('js__show');
  displayable[1].classList.remove('js__show');
  displayable[2].classList.remove('js__show');
  btnDesign.classList.toggle('js__arrowRotate');
  btnFill.classList.remove('js__arrowRotate');
  btnShare.classList.remove('js__arrowRotate');
};

btnDesign.addEventListener('click', opendesign);

//Fill
const btnFill = document.querySelector('.js__fillRotate');

const openFill = function () {
  displayable[1].classList.toggle('js__show');
  displayable[0].classList.remove('js__show');
  displayable[2].classList.remove('js__show');
  btnFill.classList.toggle('js__arrowRotate');
  btnDesign.classList.remove('js__arrowRotate');
  btnShare.classList.remove('js__arrowRotate');
};

btnFill.addEventListener('click', openFill);

//Share
const btnShare = document.querySelector('.js__shareRotate');

const openShare = function () {
  displayable[2].classList.toggle('js__show');
  displayable[0].classList.remove('js__show');
  displayable[1].classList.remove('js__show');
  btnShare.classList.toggle('js__arrowRotate');
  btnDesign.classList.remove('js__arrowRotate');
  btnFill.classList.remove('js__arrowRotate');
};

btnShare.addEventListener('click', openShare);

//PRO
// const btn = document.querySelectorAll('.js__rotate');
// const divDisplay = document.querySelectorAll('.js__displayNone');

// const openDisplay = function (i) {
//   divDisplay[i].classList.toggle('js__show');
// };

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', () => openDisplay(i));
// }
