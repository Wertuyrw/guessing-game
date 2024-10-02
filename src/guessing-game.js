class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.currentGuess = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.currentGuess;
    }

    greater() {
        this.min = this.currentGuess;
    }
}
// the decision that I think is the right one
// class GuessingGame {   
//     constructor() {
//         this.min = 0;
//         this.max = 0;
//         this.currentGuess = 0;
//     }

//     setRange(min, max) {
//         this.min = min;
//         this.max = max;
//         this.currentGuess = Math.floor((min + max) / 2);
//     }

//     guess() {
//         return this.currentGuess;
//     }

//     lower() {
//         this.max = this.currentGuess - 1;
//         this.currentGuess = Math.floor((this.min + this.max) / 2);
//     }

//     greater() {
//         this.min = this.currentGuess + 1;
//         this.currentGuess = Math.floor((this.min + this.max) / 2);
//     }
// }
module.exports = GuessingGame;
