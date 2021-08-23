const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#hypotenuse-output");

const calculateSumOfSquares = (a, b) => {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
};

const calculateHypotenuse = () => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
};
hypotenuseBtn.addEventListener("click", () => {
  if (
    sides[0].value &&
    sides[1].value &&
    sides[0].value != 0 &&
    sides[1].value != 0
  )
    calculateHypotenuse();
  else output.innerText = "The sides can't be empty or 0";
});
