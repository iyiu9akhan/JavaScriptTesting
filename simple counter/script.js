let number = 0;
const digit = document.querySelector(".digit");
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  number++
  digit.textContent = number;
});
