/* DEPENDENCIES */
const menu = document.querySelector("#hamburger-menu");
const closeMenu = document.querySelector("#close-menu");
const navLinks = document.querySelector("#nav-links");
const navDisplay = document.querySelector("#nav-display");

/* FUNCTIONS */
/* Handle opening/closing of hamburger menu */
function toggleHamburgerMenu() {
  menu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");

  navDisplay.classList.toggle("hidden");
}

/* Handle showing/hiding of nav */
function handleResize() {
  if (window.innerWidth <= 696) {
    menu.classList.remove("hidden");
    navLinks.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    navLinks.classList.remove("hidden");
  }
}

/* EVENT LISTENERS */
menu.addEventListener("click", toggleHamburgerMenu);
closeMenu.addEventListener("click", toggleHamburgerMenu);
window.addEventListener("resize", handleResize);

/* INITIALIZERS */
window.onload = handleResize;
document.addEventListener("DOMContentLoaded", handleResize);
