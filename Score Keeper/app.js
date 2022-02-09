const score = document.querySelector('#score');
const buttonContainer = document.querySelector('#buttonContainer');
const incPlayer1 = document.querySelector('#incPlayerOne');
const incPlayer2 = document.querySelector('#incPlayerTwo');
const playTo = document.querySelector('#playTo option:checked');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');

let p1Score = 0;
let p2Score = 0;
let playToScore = parseInt(playTo.value);
let isGameOver = false;

buttonContainer.addEventListener('click', (e) => {
	if (!isGameOver) {
		if (e.target.nodeName === 'BUTTON') {
			if (e.target.id === 'incPlayerOne') {
				p1Score++;
				score.innerText = `${p1Score} to ${p2Score}`;
			} else if (e.target.id === 'incPlayerTwo') {
				p2Score++;
				score.innerText = `${p1Score} to ${p2Score}`;
			} else if (e.target.id === 'reset') {
				p1Score = 0;
				p2Score = 0;
				score.innerText = `${p1Score} to ${p2Score}`;
			}
		}
		if (p1Score === playToScore) {
			isGameOver = true;
			p1Display.style.color = 'green';
			p1Display.style.backgroundColor = 'green';
		} else if (p2Score === playToScore) {
			isGameOver = true;
			alert('Player 2 Wins!');
		}
	} else {
		incPlayer1.disabled = true;
		incPlayer2.disabled = true;
	}
});
