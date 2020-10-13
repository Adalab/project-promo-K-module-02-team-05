'user strict';

// js__profile - image;

//Name
const inputName = document.querySelector('.js__fill--inputName');
const cardName = document.querySelector('.js__name--Card');

const addNameCard = function (event) {
  cardName.innerHTML = event.currentTarget.value;
};
inputName.addEventListener('input', addNameCard);

//Job
const inputJob = document.querySelector('.js__fill--inputJob');
const cardJob = document.querySelector('.js__fill--cardJob');

const addJobCard = function (event) {
  cardJob.innerHTML = event.currentTarget.value;
};
inputJob.addEventListener('input', addJobCard);

//reset
const btnReset = document.querySelector('.js-btnReset');

const reset = function () {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  cardName.innerText = 'Barry Allen - Flash';
  cardJob.innerText = 'The Fastest Men Alive';
};

btnReset.addEventListener('click', reset);

//Complete links with inputs -> me falta terminar lo de los href

const githubLink = document.querySelector('#js-github-link');
const githubInput = document.querySelector('.js--github');

const fillGithubHref = function () {
  githubLink.href = githubInput.value;
  console.log('DONE');
  // githubValue.innerHTML = `href = ${githubValue}`;
};

githubInput.addEventListener('input', fillGithubHref);

// console.log(completeHref);

// const githugInput = document.querySelector('.js--githubl');
// const linkedInInput = document.querySelector('.js-linkedIn');
// const phoneInput = document.querySelector('.js-js-phone');
// const mailInput = document.querySelector('.js--mail');

// la foto tb me falta...
