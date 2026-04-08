const mainHead = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (this.scrollY > 70) {
    mainHead.classList.add("slidedown");
  } else {
    mainHead.classList.remove("slidedown");
  }
});

const loginBody = document.querySelector(".login__body");
const login = document.querySelector(".login");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogin = document.querySelector(".btn_login ");
const btnRegister = document.querySelector(".btn_register ");
const icon_Login = document.querySelector(".login__close");
const menu_open = document.querySelector(".menu_open");
const menu_close = document.querySelector(".menu_close");
const navbar = document.querySelector(".navbar__menu");
const iconLogin = document.querySelector(".login_icon-login");
const iconRegister = document.querySelector(".login_icon-register");

registerLink?.addEventListener("click", () => {
  loginBody?.classList.add("active");
});

loginLink?.addEventListener("click", () => {
  loginBody?.classList.remove("active");
});

btnLogin?.addEventListener("click", () => {
  login?.classList.add("active-popup");
  loginBody?.classList.remove("active");
});

btnRegister?.addEventListener("click", () => {
  login?.classList.add("active-popup");
  loginBody?.classList.add("active");
});

iconLogin?.addEventListener("click", () => {
  login.classList?.add("active-popup");
  loginBody.classList?.remove("active");
});

iconRegister?.addEventListener("click", () => {
  login?.classList.add("active-popup");
  loginBody?.classList.add("active");
});

icon_Login?.addEventListener("click", () => {
  login?.classList.remove("active-popup");
});

menu_open?.addEventListener("click", () => {
  navbar?.classList.add("active");
});

menu_close?.addEventListener("click", () => {
  navbar?.classList.remove("active");
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
