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

let input = prompt('Enter something:');
while (true) {
	input = prompt(input);
	if (input.toLowerCase === 'quit') {
		break;
	}
}
console.log('You win!');
