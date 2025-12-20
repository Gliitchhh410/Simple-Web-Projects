export class QuizEngine {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
  }

  get totalQuestions() {
    return this.questions.length;
  }
  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  get isEnded() {
    return this.currentIndex >= this.questions.length;
  }

  get progressPercent() {
    return (this.currentIndex / this.questions.length) * 100;
  }

  submitAnswer(isCorrect) {
    if (isCorrect) {
      this.score++;
    }
    return isCorrect;
  }

  next() {
    this.currentIndex++;
  }

  restart() {
    this.score = 0;
    this.currentIndex = 0;
  }
}
