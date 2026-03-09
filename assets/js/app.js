const navbar = document.querySelector(".navbar");
const navToggle = document.querySelectorAll("#nav-toggle");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggle.forEach((toggle) => {
  toggle.addEventListener("click", toggleMenu);
});

// faq
const questionTitle = document.querySelectorAll(".question-title");

function toggleQuestion() {
  this.classList.toggle("active");
}

questionTitle.forEach((title) => {
  title.addEventListener("click", toggleQuestion);
});

//new date footer
const newDate = document.querySelector(".date");
newDate.innerText = new Date().getFullYear();

// header slidein animation
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (this.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
