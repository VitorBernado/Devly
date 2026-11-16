function changeTheme() {
  const themeActive = document.body.classList.toggle("light-theme");

  document
    .querySelector(".switch")
    .setAttribute("aria-pressed", String(!themeActive));
}
