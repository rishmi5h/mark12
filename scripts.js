const isTriangleInput = document.querySelectorAll("input");
const isTriangleBtn = document.querySelector(".is-triangle");
const isTriangleOutput = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return Number(angle1) + Number(angle2) + Number(angle3);
}

function isTriangle() {
  const angleOne = isTriangleInput[0].value;
  const angleTwo = isTriangleInput[1].value;
  const angleThree = isTriangleInput[2].value;

  if (calculateSumOfAngles(angleOne, angleTwo, angleThree) == 180) {
    isTriangleOutput.innerText = "This is a Triangle";
  } else {
    isTriangleOutput.innerText = "This is not a Triangle";
  }
}
isTriangleBtn.addEventListener("click", () => isTriangle());
