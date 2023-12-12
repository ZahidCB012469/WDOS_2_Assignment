// Identifying DOM elements
const inquirePopupInput = document.getElementById("inquirePopup");
const inqcloseBtnInput = document.getElementById("InqcloseBtn");
const inquiresubBtnInput = document.getElementById("inquiresubBtn");

// Event Listners

inquiresubBtnInput.addEventListener("click", popupFuntion);
inqcloseBtnInput.addEventListener("click", popupFuntion)


function popupFuntion(){
    inquirePopupInput.classList.toggle("active");
}
