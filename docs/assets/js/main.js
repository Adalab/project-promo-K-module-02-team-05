const btnDesign=document.querySelector(".js__designRotate"),displayable=document.getElementsByClassName("js__displayNone"),opendesign=function(){displayable[0].classList.toggle("js__show"),btnDesign.classList.toggle("js__arrowRotate")};btnDesign.addEventListener("click",opendesign);const btnFill=document.querySelector(".js__fillRotate"),openFill=function(){displayable[1].classList.toggle("js__show"),btnFill.classList.toggle("js__arrowRotate")};btnFill.addEventListener("click",openFill);const btnShare=document.querySelector(".js__shareRotate"),openShare=function(){displayable[2].classList.toggle("js__show"),btnShare.classList.toggle("js__arrowRotate")};btnShare.addEventListener("click",openShare);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage),console.log(">> Ready :)");