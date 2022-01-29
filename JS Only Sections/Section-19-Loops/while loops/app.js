// let num = 0;
// while (num < 10) {
// 	console.log(num);
// 	num++;
// 	console.log(num);
// }

// let gameOver = false;

// while (!gameOver) {
// 	let playerEntry = prompt('Enter anything except 7 to continue playing:');
// 	if (playerEntry !== '7') {
// 		playerEntry = prompt('Enter anything except 7 to continue playing:');
// 	} else {
// 		gameOver = true;
// 	}
// }

// let input = prompt('Enter something:');
// while (true) {
// 	input = prompt(input);
// 	if (input.toLowerCase === 'quit') {
// 		break;
// 	}
// }
// console.log('You win!');

// Guessing Game
let maxNum = parseInt(prompt('Enter a maximum number:'));
while (!maxNum) {
	maxNum = parseInt(prompt('Enter a VALID maximum number:'));
}
let winningNum = Math.floor(Math.random() * maxNum) + 1;
let numGuess = 1;
let guess = prompt('Enter your guess:');

while (parseInt(guess) !== winningNum) {
	numGuess++;
	if (guess < winningNum) {
		guess = prompt('Too low. Guess again:');
	} else if (guess > winningNum) {
		guess = prompt('Too high. Guess again:');
	} else if (guess.toLowerCase() === 'q') {
		break;
	} else {
		guess = prompt('Invalid entry. Try again:');
	}
}
console.log(`Congratulations, you won after ${numGuess} guesses!`);
