const score = document.querySelector('#score');
const incPlayer1 = document.querySelector('#incPlayerOne');
const incPlayer2 = document.querySelector('#incPlayerTwo');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let playToScore = parseInt(playTo.value);

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1Display.innerText = p1Score;
	p2Display.innerText = p2Score;
	incPlayer1.disabled = false;
	incPlayer2.disabled = false;
	isGameOver = false;
	p1Display.className = '';
	p2Display.className = '';
}

playTo.addEventListener('change', () => {
	playToScore = parseInt(playTo.value);
	resetGame();
});

incPlayer1.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === playToScore) {
			isGameOver = true;
			incPlayer1.disabled = true;
			incPlayer2.disabled = true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
		}
		p1Display.innerText = p1Score;
	}
});

incPlayer2.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === playToScore) {
			isGameOver = true;
			incPlayer1.disabled = true;
			incPlayer2.disabled = true;
			p2Display.classList.toggle('winner');
			p1Display.classList.toggle('loser');
		}
		p2Display.innerText = p2Score;
	}
});

reset.addEventListener('click', resetGame);
