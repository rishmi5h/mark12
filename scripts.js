const input = document.querySelectorAll(".input");
const btn = document.querySelector(".is-triangle");
const output = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return Number(angle1) + Number(angle2) + Number(angle3);
}

function isTriangle() {
  const angle1 = input[0].value;
  const angle2 = input[1].value;
  const angle3 = input[2].value;

  if (calculateSumOfAngles(angle1, angle2, angle3) == 180) {
    output.innerText = "This is a Triangle";
  } else {
    output.innerText = "This is not a Triangle";
  }
}
btn.addEventListener("click", () => isTriangle());
