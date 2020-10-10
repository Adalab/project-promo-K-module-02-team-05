//Design
const btnDesign = document.querySelector('.js__designRotate');
const displayable = document.getElementsByClassName('js__displayNone');

const opendesign = function () {
  displayable[0].classList.toggle('js__show');
  btnDesign.classList.toggle('js__arrowRotate');
};

btnDesign.addEventListener('click', opendesign);

//Fill
const btnFill = document.querySelector('.js__fillRotate');

const openFill = function () {
  displayable[1].classList.toggle('js__show');
  btnFill.classList.toggle('js__arrowRotate');
};

btnFill.addEventListener('click', openFill);

//Share
const btnShare = document.querySelector('.js__shareRotate');

const openShare = function () {
  displayable[2].classList.toggle('js__show');
  btnShare.classList.toggle('js__arrowRotate');
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

// .arrow {
//   max-width: 7%;
//   display: flex;
//   -webkit-transition: all 0.4s ease;
//   -o-transition: all 0.4s ease;
//   transition: all 0.4s ease;
// }

// .arrowRotate {
//   -webkit-transform: rotate(-90deg);
//   -ms-transform: rotate(-90deg);
//   -o-transform: rotate(-90deg);
//   transform: rotate(-90deg);
//   -webkit-transition: all 0.4s ease;
//   -o-transition: all 0.4s ease;
//   transform: rotate(-90deg);
// }
