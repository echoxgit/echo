// document.body.style.overflow = "hidden";

// function blockScroll() {
//   document.body.style.overflow = "auto";
// }
// setTimeout(function () {
//   blockScroll();
// }, 5000);

const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const features = document.querySelector(".features");
const faq = document.querySelector(".faq");
const toggle = document.querySelector(".toggle");
const path = document.querySelector(".path");
const img = document.querySelector(".img");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("dark");
  main.classList.toggle("dark");
  features.classList.toggle("dark");
  faq.classList.toggle("dark");

  if (navbar.classList.contains("dark")) {
    document.body.style.background = "#2f2f2f";
  } else {
    document.body.style.background = "#fff";
  }

  if (navbar.classList.contains("dark")) {
    path.setAttribute(
      "d",
      "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    );
    img.setAttribute("src", "assets/imgs/cfzp59aP.png");
  } else {
    path.setAttribute(
      "d",
      "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    );
    img.setAttribute("src", "assets/imgs/kBYQ0280.png");
  }
});

let toggles = document.getElementsByClassName("accordion-button");
let content = document.getElementsByClassName("accordion-collapse");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(content[i].style.height) != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px";
      toggles[i].classList.remove("collapse");
    } else {
      content[i].style.height = "0px";
      toggles[i].classList.add("collapse");
    }

    for (let j = 0; j < content.length; j++) {
      if (j !== i) {
        content[j].style.height = "0px";
        toggles[j].classList.add("collapse");
      }
    }
  });
}

window.onload = function () {
  window.location.href = window.location.origin + "/echo/#";
  window.location.reload;
};

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  mainMenu.style.opacity = "1";
}

function close() {
  mainMenu.style.top = "-100%";
}
