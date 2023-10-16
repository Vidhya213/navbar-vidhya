const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector(".social-icons");
navToggle.addEventListener("click", function (event) {
  event.preventDefault();
  navToggle.classList.toggle("active");
  links.classList.toggle("show-links");
});
