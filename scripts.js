const $body = document.querySelector("body");
const $header = document.querySelector("header");
const $switcher = document.querySelector(".switcher");

function toggle() {
  const darkModeExist = $switcher.classList.contains("dark-mode");
  darkModeExist
    ? $switcher.classList.remove("dark-mode")
    : $switcher.classList.add("dark-mode");
  darkModeExist
    ? $body.classList.remove("dark-mode")
    : $body.classList.add("dark-mode");
  darkModeExist
    ? $header.classList.remove("dark-mode")
    : $header.classList.add("dark-mode");
}
