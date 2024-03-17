function guessNumber(a) {
    let randomNumber =  Math.floor(Math.random() * 10) + 1

    if (typeof a !== 'number'){
        console.log("You enter invalid value")
    } else if (a === randomNumber) {
        console.log("You guessed the number")
    } else {
        console.log("Try again. The random number was " + randomNumber + ".");
    }

}

guessNumber(1)