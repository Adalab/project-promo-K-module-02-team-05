function setLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
}

function getFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem("data"));
  data = savedData;
  rePaintInput();
}

function rePaintInput() {
  // for (const item of data) {
  document.querySelector("#fullName").value = data.fullName;
  document.querySelector("#job").value = data.job;
  document.querySelector("#mail").value = data.mail;
  document.querySelector("#telephone").value = data.telephone;
  document.querySelector("#linkedin").value = data.linkedin;
  document.querySelector("#github").value = data.github;
  // }
  if (data.profileImg) {
    document.querySelector(
      "#profileImg"
    ).style.backgroundImage = `url(${data.profileImg})`;
    document.querySelector(
      "#previewImg"
    ).style.backgroundImage = `url(${data.previewImg})`;
  }
}
getFromLocalStorage();
