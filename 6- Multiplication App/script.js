const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const input = document.querySelector("input");
const button = document.querySelector("button");
const refresh = document.querySelector(".newquestion");

const answerParagraph = document.getElementById("answer");

let correctAnswer;

function generateNewQuestion() {
  const randomNumber1 = Math.floor(Math.random() * 10) + 1;
  const randomNumber2 = Math.floor(Math.random() * 10) + 1;

  number1.textContent = randomNumber1;
  number2.textContent = randomNumber2;

  correctAnswer = randomNumber1 * randomNumber2;

  return correctAnswer;
}

function clearAnswer() {
  answerParagraph.textContent = "";
  answerParagraph.style.color = "";
}

button.addEventListener("click", () => {
  const inputField = parseFloat(input.value.trim());

  if (!isNaN(inputField)) {
    if (inputField === correctAnswer) {
      answerParagraph.textContent = `Yes, ${correctAnswer} is the correct answer`;
    } else {
      answerParagraph.style.color = "red";
      answerParagraph.textContent = `${inputField} is wrong, correct answer is ${correctAnswer}`;
    }
  } else {
    answerParagraph.style.color = "red";
    answerParagraph.textContent = "Please enter a valid number";
  }
});

refresh.addEventListener("click", () => {
  clearAnswer();
  input.value = "";
  generateNewQuestion();
});

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    button.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
  }
});

generateNewQuestion();
