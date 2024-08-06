/* VARIABLES */
/* Variables for homepage */
const subtitle = document.querySelector("#homepage-subtitle");
const subtitleText = [
  "Travel respectfully.",
  "Travel like a local.",
  "Travel ethically.",
];
let subtitleIndex = 0;

/* FUNCTIONS */
/* Change subtitle of homepage every 8.2 seconds */
function changeText() {
  subtitle.textContent = subtitleText[subtitleIndex];
  subtitleIndex = (subtitleIndex + 1) % subtitleText.length;
}

/* INITIALIZERS */
window.onload = () => {
  setInterval(changeText, 8200);
};
