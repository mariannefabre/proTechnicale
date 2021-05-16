// side menu

let sideNav = document.getElementById("nav-items");

const openSideNav = function () {
  function isNavOpen() {
    return sideNav.style.width === "100%" ? true : false;
  }
  function openNav() {
    sideNav.style.width = "100%";
  }
  function closeNav() {
    sideNav.style.width = "0";
  }

  document.getElementById("nav-icon").classList.toggle("open");
  isNavOpen() ? closeNav() : openNav();
};

sideNav.addEventListener("click", openSideNav, true);

document
  .getElementById("nav-icon")
  .addEventListener("click", openSideNav, true);

// plane animation
setTimeout(() => {
  document.getElementById("plane").style.visibility = "inherit";
}, 1500);

// animations
(function () {
  let fadeInElements;
  let slideInElements;
  let windowHeight;

  function init() {
    fadeInElements = document.querySelectorAll(".fadeIn");
    slideInElements = document.querySelectorAll(".slideIn");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < fadeInElements.length; i++) {
      let fadeInElement = fadeInElements[i];
      let positionFromTop = fadeInElements[i].getBoundingClientRect().bottom;

      if (positionFromTop - windowHeight <= 0) {
        fadeInElement.classList.add("fade-in");
        fadeInElement.classList.remove("fadeIn");
      }
    }
    for (let j = 0; j < slideInElements.length; j++) {
      let slideInElement = slideInElements[j];
      let positionFromTop1 = slideInElements[j].getBoundingClientRect().bottom;

      if (positionFromTop1 - windowHeight <= 0) {
        slideInElement.classList.add("slide-in");
        slideInElement.classList.remove("slideIn");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
