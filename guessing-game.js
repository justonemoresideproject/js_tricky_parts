function guessingGame() {
    const randNum = Math.floor(Math.random() * 100)
    let guesses = 0;
    let gameWon = false
    
    return function (guess) {
        if(gameWon) return "The game is over, you already won!"
        if(guess === randNum) {
            gameWon = true;
            return `You win! You found ${randNum} in ${guesses} guesses.`
        }
        guesses++
        return guess < randNum ? `${guess} is too low!` : `${guess} is too high!`
    }
}

module.exports = { guessingGame };
