const quizForm = document.getElementById("quizForm");
const submitBtn = document.querySelector(".submit");
const quizResult = document.querySelector(".quiz-result");

function calculateScore() {
  const quizFormData = new FormData(quizForm);

  const correctAnswers = ["90°", "right angled"];

  let score = 0;
  let index = 0;

  for (let value of quizFormData.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }

  quizResult.innerText = `Your Score is ${score}`;
}

submitBtn.addEventListener("click", () => calculateScore());
