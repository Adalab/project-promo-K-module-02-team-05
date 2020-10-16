'user strict';
// const inputList = document.querySelectorAll('.js-fill__input');
// // const cardValue = document.querySelectorAll('.js__card--value');
// let data = {
//   fullName: 'Barry Allen - Flash',
//   job: 'The fastest man alive',
//   mail: '',
//   telephone: '',
//   linkedin: '',
//   github: '',
// };
// const saveField = function (event) {
//   data[event.currentTarget.id] = event.currentTarget.value;
//   console.log(data[event.currentTarget.id]);
//   console.log(event.currentTarget.id);
//   const idCards = `#js-${event.currentTarget.id}-card`;
//   document.querySelector(idCards).innerHTML = event.currentTarget.value;
//   console.log(idCards);
// };
// //
// for (const eachElement of inputList) {
//   eachElement.addEventListener('blur', saveField);
// }
const inputTitle = document.querySelectorAll('.js-fill__inputTitle');
const inputLink = document.querySelectorAll('.js-fill__inputLink');
let data = {
  fullName: '',
  job: '',
};
  let info = {
  mail: '',
  telephone: '',
  linkedin: '',
  github: '',
};
const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  const idCards = `#js-${event.currentTarget.id}-card`;
    document.querySelector(idCards).innerHTML = event.currentTarget.value;
};
const saveLink = function (event) {
  info[event.currentTarget.id] = event.currentTarget.value;
  const idLinks = `#js-${event.currentTarget.id}-link`;
    document.querySelector(idLinks).href = event.currentTarget.value;
};
for (const eachElement of inputTitle) {
  eachElement.addEventListener('keyup', saveField);
}
for (const eachElement of inputLink) {
  eachElement.addEventListener('keyup', saveLink);
}