const wrapper = document.querySelector(".auth-section");
const loginBtn = document.querySelector(".login");
const closeBtn = document.querySelector(".login-modal__close");
const signin = document.querySelector(".login-modal__footer__link1");
const w1 = document.querySelector(".sign-in-wrapper");
const signup = document.querySelector(".login-modal__footer__link2");
const w2 = document.querySelector(".sign-up-wrapper");

loginBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

signin.addEventListener("click", () => {
  document.getElementsByClassName("sign-in-wrapper active").style.display = "none";
  document.getElementsByClassName("sign-up-wrapper active").style.display = "flex";
  document.getElementsByClassName("login-modal__footer login-footer-wrapper").style.display = "none";
  document.getElementsByClassName("login-modal__footer").style.display = "";
}); 

signup.addEventListener("click", () => {
  document.getElementsByClassName("sign-up-wrapper active").style.display = "none";
  document.getElementsByClassName("sign-in-wrapper active").style.display = "flex";
});