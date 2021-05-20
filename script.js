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
if (document.getElementById("plane")) {
  document.getElementById("plane").style.visibility = "inherit";
  setTimeout(() => {
    document.getElementById("plane").style.visibility = "inherit";
  }, 1500);
}

// animations
(function () {
  let fadeInElements;
  let slideInElements;
  let oppositeSlideInElements;
  let windowHeight;

  function init() {
    fadeInElements = document.querySelectorAll(".fadeIn");
    slideInElements = document.querySelectorAll(".slideIn");
    oppositeSlideInElements = document.querySelectorAll(".oppositeSlideIn");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < fadeInElements.length; i++) {
      let fadeInElement = fadeInElements[i];
      let positionFromBottom = fadeInElements[i].getBoundingClientRect().bottom;

      if (positionFromBottom - windowHeight <= 0) {
        fadeInElement.classList.add("fade-in");
        fadeInElement.classList.remove("fadeIn");
        fadeInElements = document.querySelectorAll(".fadeIn");
        i--;
      }
    }
    for (let i = 0; i < slideInElements.length; i++) {
      let slideInElement = slideInElements[i];
      let positionFromBottom =
        slideInElements[i].getBoundingClientRect().bottom;

      if (positionFromBottom - windowHeight <= 0) {
        console.log("2");

        slideInElement.classList.add("slide-in-right");
        slideInElement.classList.remove("slideIn");
        slideInElements = document.querySelectorAll(".slideIn");
        i--;
      }
    }
    for (let i = 0; i < oppositeSlideInElements.length; i++) {
      let oppositeSlideInElement = oppositeSlideInElements[i];
      let positionFromBottom =
        oppositeSlideInElements[i].getBoundingClientRect().bottom;

      if (positionFromBottom - windowHeight <= 0) {
        console.log("3");
        oppositeSlideInElement.classList.add("slide-in-left");
        oppositeSlideInElement.classList.remove("oppositeSlideIn");
        oppositeSlideInElements = document.querySelectorAll(".oppositeSlideIn");
        i--;
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
