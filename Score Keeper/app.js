const p1 = {
	score: 0,
	button: document.querySelector('#incPlayerOne'),
	display: document.querySelector('#p1')
};

const p2 = {
	score: 0,
	button: document.querySelector('#incPlayerTwo'),
	display: document.querySelector('#p2')
};

const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

let isGameOver = false;
let playToScore = parseInt(playTo.value);

function resetGame() {
	for (let p of [ p1, p2 ]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.className = '';
		p.button.disabled = false;
	}
	isGameOver = false;
}

function updateScore(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === playToScore) {
			isGameOver = true;
			player.button.disabled = true;
			opponent.button.disabled = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
		}
		player.display.textContent = player.score;
	}
}

playTo.addEventListener('change', () => {
	playToScore = parseInt(playTo.value);
	resetGame();
});

p1.button.addEventListener('click', () => {
	updateScore(p1, p2);
});

p2.button.addEventListener('click', () => {
	updateScore(p2, p1);
});

reset.addEventListener('click', resetGame);
