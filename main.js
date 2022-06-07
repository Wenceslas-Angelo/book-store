const header2 = document.querySelector("header .header-two");
const searchForm = document.querySelector("header .header-one form");
const searchBtn = document.querySelector("#search-btn");

const loginForm = document.querySelector(".login-form-container");
const loginBtn = document.querySelector("#login-btn");
const closeLoginBtn = document.querySelector("#close-login-btn");

window.addEventListener("scroll", () => {
  searchForm.classList.remove("show");
  window.scrollY > 80
    ? header2.classList.add("active")
    : header2.classList.remove("active");
});

window.addEventListener("load", () => {
  window.scrollY > 80
    ? header2.classList.add("active")
    : header2.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("show");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("show");
});

closeLoginBtn.addEventListener("click", () => {
  loginForm.classList.remove("show");
});
