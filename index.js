const form = document.querySelector("form");
const pass = document.getElementById("pass");
const confirm = document.getElementById("confirm");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  if (pass.value === confirm.value) return;

  e.preventDefault();

  error.textContent = "Passwords do not match";
  error.classList.replace("hide", "show");
});
