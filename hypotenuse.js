const input = document.querySelectorAll(".input-side");
const chkBtn = document.querySelector(".chkHypoBtn");
const output = document.querySelector(".output");

function calculateHypotenuse(side1, side2) {
  return Math.sqrt(side1 * side1 + side2 * side2);
}

function checkHypotenus() {
  const side1 = input[0].value;
  const side2 = input[1].value;

  output.innerText = `The Length of the hypotenuse is ${calculateHypotenuse(
    side1,
    side2
  )} cm `;
}

chkBtn.addEventListener("click", () => checkHypotenus());
