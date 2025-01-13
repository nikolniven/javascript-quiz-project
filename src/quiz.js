class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    for (let i = 0; i <= this.questions.length; i++) {
      let j = Math.floor(Math.random() * this.questions.length);

      const temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;

      return this.questions;
    }
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer) {
      return this.correctAnswers++;
    }
  }
  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
    return true;
  }
}
