function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorChange = document.querySelector(".color");
changeBtn.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor();
  body.style.background = color;
  colorChange.textContent = color;
}
