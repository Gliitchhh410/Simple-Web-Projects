import { questions } from "./data/questions.js";
import { QuizEngine } from "./models/quizEngine.js";
import { QuizUI } from "./views/quizUI.js";

const domElements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startButton: document.getElementById("start-btn"),
  restartButton: document.getElementById("restart-btn"),
  questionText: document.getElementById("question-text"),
  answersContainer: document.getElementById("answers-container"),
  currentQuestionSpan: document.getElementById("current-question"),
  totalQuestionsSpan: document.getElementById("total-questions"),
  scoreSpan: document.getElementById("score"),
  finalScoreSpan: document.getElementById("final-score"),
  maxScoreSpan: document.getElementById("max-score"),
  resultMessage: document.getElementById("result-message"),
  progressBar: document.getElementById("progress"),
};

document.addEventListener("DOMContentLoaded", () => {
  const myEngine = new QuizEngine(questions);
  const myUI = new QuizUI(myEngine, domElements);
});
