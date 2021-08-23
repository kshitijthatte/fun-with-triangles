const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector("#quiz-output");

const correctAnswers = ["90°", "right angled"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index++;
  }
  output.innerText = "Your score is " + score;
};

quizForm.submit.addEventListener("click", (e) => {
  e.preventDefault();
  calculateScore();
});
