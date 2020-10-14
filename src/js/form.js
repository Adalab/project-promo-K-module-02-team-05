'user strict';

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

//Complete links with inputs

//movil
const phoneLink = document.querySelector('#js-phone-link');
const phoneInput = document.querySelector('.js-phone');

const fillPhoneHref = function () {
  phoneLink.href = phoneInput.value;
};
phoneInput.addEventListener('input', fillPhoneHref);

//mail
const mailLink = document.querySelector('#js-mail-link');
const mailInput = document.querySelector('.js--mail');

const fillMailHref = function () {
  mailLink.href = mailInput.value;
};
mailInput.addEventListener('input', fillMailHref);

//LinkedIn
const linkedInLink = document.querySelector('#js-linkedIn-link');
const linkedInInput = document.querySelector('.js--linkedIn');

const fillLindedInHref = function () {
  linkedInLink.href = linkedInInput.value;
};
linkedInInput.addEventListener('input', fillLindedInHref);

//github
const githubLink = document.querySelector('#js-github-link');
const githubInput = document.querySelector('.js--github');

const fillGithubHref = function () {
  githubLink.href = githubInput.value;
  console.log('DONE');
};

githubInput.addEventListener('input', fillGithubHref);

//reset
const btnReset = document.querySelector('.js-btnReset');

const reset = function () {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  cardName.innerText = 'Barry Allen - Flash';
  cardJob.innerText = 'The Fastest Men Alive';
  phoneLink.href = '#';
  mailLink.href = '#';
  linkedInLink.href = '#';
  githubLink.href = '#';
};

btnReset.addEventListener('click', reset);

// console.log(completeHref);

// const githugInput = document.querySelector('.js--githubl');
// const linkedInInput = document.querySelector('.js-linkedIn');
// const phoneInput = document.querySelector('.js-js-phone');
// const mailInput = document.querySelector('.js--mail');

// la foto tb me falta...
