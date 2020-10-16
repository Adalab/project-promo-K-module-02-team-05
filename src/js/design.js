const checkBlue = document.querySelector('.js-checkedBlue');
const checkRed = document.querySelector('.js-checkedRed');
const checkGrey = document.querySelector('.js-checkedGrey');
const border = document.querySelector('.js-border');
const nameCard = document.querySelector('.js__name--Card');
const social = document.querySelectorAll('.js-socialLogos');

checkRed.addEventListener('change', (e) => {
  if (e.target.checked) {
    border.style.borderLeft = '5px solid #420101';
    nameCard.style.color = '#bd1010';
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = '2px solid #e95626';
    }
  }
});

checkBlue.addEventListener('change', (e) => {
  if (e.target.checked) {
    border.style.borderLeft = '5px solid #114e4e';
    nameCard.style.color = '#438792';
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = '2px solid #438792';
    }
  }
});

checkGrey.addEventListener('change', (e) => {
  if (e.target.checked) {
    border.style.borderLeft = '5px solid #3e5b65';
    nameCard.style.color = '#eab052';
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = '2px solid #a0c0cf';
    }
  }
});
// click.addEventListener('change', () => {
//   if (checkRed.checked) {
//     border.style.borderLeft = '5px solid #420101';
//     nameCard.style.color = '#bd1010';
//     social.style.border = '2px solid #e95626';
//   } else if (checkBlue.checked) {
//     border.style.borderLeft = '5px solid #420101';
//     nameCard.style.color = '#bd1010';
//     social.style.border = '2px solid #e95626';
//   }
// });

// for (let i = 0; i < click.length; i++) {
//   click[i].addEventListener('change', changeColorCard);
//   console.log('hi');
// }

//rojo #420101
//#bd1010
//#e95626

// checkBlue  = #420101
// #bd1010
// #e95626
