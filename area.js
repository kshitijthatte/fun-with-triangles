const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#area-output");

const calculateArea = () => {
  const area = (1 / 2) * base.value * height.value;
  output.innerText = `The area of the triangle is ${area} cm²`;
};
areaBtn.addEventListener("click", () => {
  if (base.value && height.value && base.value != 0 && height.value != 0)
    calculateArea();
  else output.innerText = "The base or height can't be empty or 0";
});
