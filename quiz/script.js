const questions = [
  {
    question: "What is the biggest animal in this world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: false },
    ],
  },

  {
    question: "What is the 1st smallest country in the world?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Japan", correct: false },
      { text: "Pakistan", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "What country has the highest life expectancy?",
    answer: [
      { text: "Hong Kong", correct: true },
      { text: "America", correct: false },
      { text: "Russia", correct: false },
      { text: "India", correct: false },
    ],
  },

  {
    question: "who is the first prime minister of india",
    answer: [
      { text: " Narendra Modi ", correct: false },
      { text: "Rajiv Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: " Manmohan Singh", correct: false },
    ],
  },

  {
    question: "Which was the year India established?",
    answer: [
      { text: "1947", correct: true },
      { text: "1974", correct: false },
      { text: "1940", correct: false },
      { text: "1937", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbtn");

let currentIndex = 0;
let score = 0;

function startquiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", function (e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct == "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }

      Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct == "true") {
          button.classList.add("correct");
        }
        button.disabled = "true";
      });
      nextButton.style.display = "block";
    });
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex ++ ;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",function(){
    if(currentQuestionIndex < questions.length){
        handleNextButton(); 
    }else{
        startquiz();
    }
})

startquiz();
