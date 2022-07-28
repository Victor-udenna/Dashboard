// alert("Unable to load chart feed, try reconnectiong to a stronger internet connection");

function showMore() {
  document.querySelector("#hidden-element").classList.toggle("open");
  document.getElementById("seeall_btn").innerHTML("see less");
}
// Adds content in a function
let btn = document.querySelector("#seeall_btn");
//stores btn in variable
btn.addEventListener("click", showMore);
// runs function

// let textchange = document.querySelector('.seeall_btn');
// textchange.innerText = 'See all';
// function changetext() {
//  // textchange.style.color = 'darkgreen';
//     if (textchange.innerText = "See all") {
//         textchange.innerText = "See less"
//     }

// }

// textchange.addEventListener('click', changetext)
// textchange.innerText= 'darkgreen';

const revertext = document.querySelector(".seeall_btn");

// ✅ Toggle button text on click
revertext.addEventListener("click", function handleClick() {
  const initialText = "See all";

  if (revertext.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    revertext.textContent = "See less";
  } else {
    revertext.textContent = initialText;
  }
});

let openmodal = document.querySelector(".error");
let closeModal = document.querySelector("#close-icon");
let closeModal2 = document.querySelector(".close-btn");
let modalContainer = document.querySelector(".pop-up-container");

openmodal.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

closeModal2.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
