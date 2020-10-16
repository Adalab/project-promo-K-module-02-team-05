'user strict';

const inputList = document.querySelectorAll('.js__fields--input');
const form = document.querySelectorAll('.js__form');
//const cardValue = document.querySelectorAll('.js__card--value');
let data = {
  name: 'Barry Allen - Flash',
  role: 'The fastest man alive',
  mail: '',
  telephone: '',
  github: '',
  linkedin: '',
};

const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  //console.log(data[event.currentTarget.id]);
  //console.log(event.currentTarget.id);
  const idCards = `#js-${event.currentTarget.id}-card`;
  // document.querySelector(idCards).innerHTML = event.currentTarget.value;
  const el = document.querySelector(idCards);
  if (el.nodeName !== 'A') {
    el.innerHTML = event.currentTarget.value;
  } else {
    el.href = event.currentTarget.value;
  }

  // let property = 'innerHTML';

  // if (el.nodeName === 'A') {
  //   property = 'href';
  // }

  // if (el.nodeName === 'IMG') {
  //   property = 'src';
  // }

  //el[property] = event.currentTarget.value;
  //console.log(idCards);
};

//

for (const eachElement of inputList) {
  eachElement.addEventListener('blur', saveField);
}

const btnReset = document.querySelector('.js-btnReset');

function reset() {
  console.log('hi');
}
btnReset.addEventListener('click', reset);

//funcion reset

///////////////////////////////////

// let data = { ...initialValues };
// const reset = function () {
//   console.log('hi');
//   data = initialValues;
//   render();
//   // input bucle 0
// };

// const saveField = function (event) {
//   //console.log(event.currentTarget.value);
//   data[event.currentTarget.id] = event.currentTarget.value;
//   render();
//   // cardValue.innerHTML = event.currentTarget.value;

//   // for (let i = 0; i < inputList.length; i++) {
//   //   cardValue[i].innerHTML = event.currentTarget.value;
//   // }
// };

// const render = function () {
//   Object.keys(data).forEach((key) => {
//     const el = document.querySelector('.js__' + key);
//     if (el.nodeName !== 'A') {
//       el.innerHTML = data[key];
//     } else {
//       el.href = data[key];
//     }
//   });
// };

// const render = function () {
//   Object.keys(data).forEach((key) => {
//     const el = document.querySelector('.js__' + key);
//     if (el.nodeName !== 'A') {
//       el.innerHTML = data[key];
//     } else {
//       el.href = data[key];
//     }
//   });
// };

// for (const eachElement of inputList) {
//   eachElement.addEventListener('blur', saveField);
// }

// for (let i = 0; i < inputList.length; i++) {
//   inputList[i].addEventListener('blur', saveFiled);
// }

// //Name
// const inputName = document.querySelector('.js__fill--inputName');
// const cardName = document.querySelector('.js__name--Card');

// const addNameCard = function (event) {
//   cardName.innerHTML = event.currentTarget.value;
// };
// inputName.addEventListener('input', addNameCard);

// //Job
// const inputJob = document.querySelector('.js__fill--inputJob');
// const cardJob = document.querySelector('.js__fill--cardJob');

// const addJobCard = function (event) {
//   cardJob.innerHTML = event.currentTarget.value;
// };
// inputJob.addEventListener('input', addJobCard);
// ///////////////////////////////////////////////////////////////////////////////

// //Complete links with inputs

// //movil
// const phoneLink = document.querySelector('#js-phone-link');
// const phoneInput = document.querySelector('.js-phone');

// const fillPhoneHref = function () {
//   phoneLink.href = phoneInput.value;
// };
// phoneInput.addEventListener('input', fillPhoneHref);

// //mail
// const mailLink = document.querySelector('#js-mail-link');
// const mailInput = document.querySelector('.js--mail');

// const fillMailHref = function () {
//   mailLink.href = mailInput.value;
// };
// mailInput.addEventListener('input', fillMailHref);

// //LinkedIn
// const linkedInLink = document.querySelector('#js-linkedIn-link');
// const linkedInInput = document.querySelector('.js--linkedIn');

// const fillLindedInHref = function () {
//   linkedInLink.href = linkedInInput.value;
// };
// linkedInInput.addEventListener('input', fillLindedInHref);

// //github
// const githubLink = document.querySelector('#js-github-link');
// const githubInput = document.querySelector('.js--github');

// const fillGithubHref = function () {
//   githubLink.href = githubInput.value;
//   console.log('DONE');
// };

// githubInput.addEventListener('input', fillGithubHref);

// //reset
// const btnReset = document.querySelector('.js-btnReset');

// const reset = function () {
//   const inputs = document.querySelectorAll('input');
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].value = '';
//   }
//   cardName.innerText = 'Barry Allen - Flash';
//   cardJob.innerText = 'The Fastest Men Alive';
//   phoneLink.href = '#';
//   mailLink.href = '#';
//   linkedInLink.href = '#';
//   githubLink.href = '#';
// };

// btnReset.addEventListener('click', reset);

// // console.log(completeHref);

// // const githugInput = document.querySelector('.js--githubl');
// // const linkedInInput = document.querySelector('.js-linkedIn');
// // const phoneInput = document.querySelector('.js-js-phone');
// // const mailInput = document.querySelector('.js--mail');

// // la foto tb me falta...
