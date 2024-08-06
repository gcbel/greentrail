/* VARIABLES */
const toggle = document.querySelectorAll(".toggle-icon");

/* FUNCTIONS */
function toggleSection(icon) {
  const countryContent = icon.parentElement.nextElementSibling;
  countryContent.classList.toggle("hidden");

  // Toggle the icon direction
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}

/* EVENT LISTENERS */
toggle.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    toggleSection(icon);
  });
});
