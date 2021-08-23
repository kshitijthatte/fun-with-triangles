const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const isTriangleOutput = document.querySelector("#is-triangle-output");

isTriangleBtn.addEventListener("click", () => {
  if (
    inputs[0].value &&
    inputs[1].value &&
    inputs[2].value &&
    inputs[0].value !== 0 &&
    inputs[1].value !== 0 &&
    inputs[2].value !== 0
  )
    isTriangle();
  else isTriangleOutput.innerText = "The angles can't be empty or 0";
});

const isTriangle = () => {
  const sumOfAngles = calculateSumOfAngles(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  );
  if (sumOfAngles == 180) {
    isTriangleOutput.innerText = "Yayy, the angles form a triangle";
  } else {
    isTriangleOutput.innerText = "Oh Oh!, the angles do not form a triangles";
  }
};

const calculateSumOfAngles = (angle1, angle2, angle3) => {
  return Number(angle1) + Number(angle2) + Number(angle3);
};
