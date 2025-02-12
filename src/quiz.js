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
    for (
      let i = 0;
      i <= this.questions.length - 1;
      i++ // either minor of 6 or minor or equal to 5
    ) {
      let j = Math.floor(Math.random() * this.questions.length);

      const temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
    return this.questions;
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

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty > 3 || difficulty < 1)
      return;
    this.questions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });
  }
  averageDifficulty() {
    return (
      this.questions.reduce((accumulator, currentVal) => {
        return accumulator + currentVal.difficulty;
      }, 0) / this.questions.length
    );
  }
}
