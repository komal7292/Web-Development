// Create a Secret Number
var SecretNumber = 4

// user ask for guess
var Guess = window.prompt('Guess a Number?')

// check if guess is right
if (Number(Guess) === SecretNumber) {
    window.alert('You got it right.')
}
// check if guess too high
else if (Number(Guess) > SecretNumber) {
    window.alert('Too Higher, Guess again.')
}
// check if guess to lower
else {
    Number(Guess) < SecretNumber
    window.alert('Too lower, guess again.')
}