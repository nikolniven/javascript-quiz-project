class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = [...choices];
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    for (
      let i = 0;
      i <= this.choices.length - 1;
      i++ //remember the length of the array will never equal the maximum position  in the array if we start from 0
    ) {
      let j = Math.floor(Math.random() * this.choices.length);

      const temp = this.choices[i]; //I need this one otherwise I would use the value from choices
      this.choices[i] = this.choices[j]; // I swap them
      this.choices[j] = temp; //assigning temp to the position of j
    }
    return this.choices;
  }
}

// const arrayTest = [1, 3, 6, 9, 1, 2, 123];

// const randomIndex = Math.floor(Math.random() * arrayTest.length);

// console.log("is random number:", randomIndex);
