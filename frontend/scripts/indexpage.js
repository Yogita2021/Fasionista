// slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
// slidshow 2
var slideIndex2 = 0;
showSlides2();
function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("slide-2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 2000);
}
// slidshow 3
var slideIndex3 = 0;
showSlides3();
function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("slide-3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }
  slides3[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 2000);
}
// logout functionality

let currentUser = localStorage.getItem("token") || "";
let LogoutBtn = document.getElementById("LogoutBtn");

if (currentUser.length == 0) {
  LogoutBtn.style.visibility = "hidden";
} else {
  LogoutBtn.style.visibility = "visible";
}

LogoutBtn.addEventListener("click", () => {
  currentUser = "";
  localStorage.removeItem("token");
  LogoutBtn.style.visibility = "hidden";
  alert("Log out successfully!!");
  window.location.href = "../html/login.html";
});
