const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closePopup = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closePopup.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const overlay = document.querySelector(".overlay-bg");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  overlay.classList.add("active");
});

closePopup.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  overlay.classList.remove("active");
});
