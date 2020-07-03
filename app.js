const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Value = document.querySelector("#value");

button.addEventListener("click", fn1);
function fn1() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colors.length);
    hex += colors[index];
  }
  body.style.backgroundColor = hex;
  Value.textContent = hex;
}
