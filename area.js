const input = document.querySelectorAll(".input-side");
const chkBtn = document.querySelector(".chkAreaBtn");
const output = document.querySelector(".output");

function calculateArea(base, height) {
  return (1 / 2) * (base * height);
}

function checkArea() {
  const base = input[0].value;
  const height = input[1].value;

  output.innerText = `The area of the triangle is ${calculateArea(
    base,
    height
  )} cm² `;
}

chkBtn.addEventListener("click", () => checkArea());
