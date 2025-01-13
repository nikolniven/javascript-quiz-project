class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = [...choices];
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    for (let i = 0; i <= this.choices.length; i++) {
      let j = Math.floor(Math.random() * this.choices.length);

      const temp = this.choices[i];
      this.choices[i] = this.choices[j];
      this.choices[j] = temp;

      return this.choices;
    }
  }
}

// const arrayTest = [1, 3, 6, 9, 1, 2, 123];

// const randomIndex = Math.floor(Math.random() * arrayTest.length);

// console.log("is random number:", randomIndex);
