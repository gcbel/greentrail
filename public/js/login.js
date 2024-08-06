/* VARIABLES */
const showSignInSection = document.getElementById("sign-in-button");
const showSignUpSection = document.getElementById("sign-up-button");
const signInSection = document.getElementById("sign-in");
const signUpSection = document.getElementById("sign-up");
const signup = document.querySelector("#go-sign-up");
const signin = document.querySelector("#go-sign-in");

const signinEmailAlert = document.querySelector("#signin-email-alert");
const signinPasswordAlert = document.querySelector("#signin-password-alert");
const signinAlert = document.querySelector("#signin-alert");

const emailAlert = document.querySelector("#signup-email-alert");
const firstAlert = document.querySelector("#signup-first-alert");
const lastAlert = document.querySelector("#signup-last-alert");
const passwordAlert = document.querySelector("#signup-password-alert");

/* FUNCTIONS */
/* Show sign in and hide sign up */
function showSignIn() {
  signInSection.style.display = "block";
  signUpSection.style.display = "none";
}

/* Show sign up and hide sign in */
function showSignUp() {
  signInSection.style.display = "none";
  signUpSection.style.display = "block";
}

/* Signs a user in */
const userSignIn = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#sign-in-email").value;
  const password = document.querySelector("#sign-in-password").value;

  if (!email) {
    signinEmailAlert.classList.remove("hidden");
  } else {
    signinEmailAlert.classList.add("hidden");
  }

  if (!password) {
    signinPasswordAlert.classList.remove("hidden");
  } else {
    signinPasswordAlert.classList.add("hidden");
  }

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/locations");
    } else {
      signinAlert.classList.remove("hidden");
    }
  }
};

/* Signs a user up */
const userSignUp = async (event) => {
  event.preventDefault();

  const first = document.querySelector("#sign-up-first").value;
  const last = document.querySelector("#sign-up-last").value;
  const email = document.querySelector("#sign-up-email").value;
  const password = document.querySelector("#sign-up-password").value;

  const validEmail = isValidEmail(email);

  if (!email || !validEmail) {
    emailAlert.classList.remove("hidden");
  } else {
    emailAlert.classList.add("hidden");
  }

  if (!first) {
    firstAlert.classList.remove("hidden");
  } else {
    firstAlert.classList.add("hidden");
  }

  if (!last) {
    lastAlert.classList.remove("hidden");
  } else {
    lastAlert.classList.add("hidden");
  }

  if (!password || password.length < 6) {
    passwordAlert.classList.remove("hidden");
  } else {
    passwordAlert.classList.add("hidden");
  }

  if (first && last && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first, last, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/locations");
    } else {
      signupAlert.classList.remove("hidden");
    }
  }
};

/* Check for submit key events */
function keyPress(event) {
  if (event.key === "Enter") {
    if (window.getComputedStyle(signInSection).display !== "none") {
      userSignIn(event);
    }
    // Check if #sign-up is visible
    else if (window.getComputedStyle(signUpSection).display !== "none") {
      userSignUp(event);
    }
  }
}

/* Checks for a valid email */
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

/* EVENT LISTENERS */
showSignInSection.addEventListener("click", showSignIn);
showSignUpSection.addEventListener("click", showSignUp);
signin.addEventListener("click", userSignIn);
signup.addEventListener("click", userSignUp);
document.addEventListener("keydown", keyPress);
