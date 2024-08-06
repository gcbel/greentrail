/* VARIABLES */
const logoutButton = document.querySelector("#logout");

/* FUNCTIONS */
/* Logs user out on click of logout button */
const userLogOut = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

/* EVENT LISTENERS */
logoutButton.addEventListener("click", userLogOut);
