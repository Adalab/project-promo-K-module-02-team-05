const checkBlue = document.querySelector('.js-checkedBlue');
const checkRed = document.querySelector('.js-checkedRed');
const border = document.querySelector('.js-border');
const nameCard = document.querySelector('.js__name--Card');
const social = document.querySelector('.js-socialLogos');

if (checkRed.checked) {
  border.style.borderLeft = '5px solid #420101';
  nameCard.style.color = '#bd1010';
  social.style.border = '2px solid #e95626';
}

//rojo #420101
//#bd1010
//#e95626

// checkBlue  = #420101
// #bd1010
// #e95626
