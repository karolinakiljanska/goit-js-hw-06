const textInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

textInput.addEventListener("input", sizeChange);
function sizeChange(event) {
  textOutput.style.fontSize = `${event.target.value}px`;
}
