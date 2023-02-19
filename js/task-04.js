const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
