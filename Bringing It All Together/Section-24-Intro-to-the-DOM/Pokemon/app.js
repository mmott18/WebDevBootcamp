// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
console.dir(container);

for (let i = 1; i <= 151; i++) {
	const pokemon = document.createElement('div');
	const sprite = document.createElement('img');
	const number = document.createElement('span');
	sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
	number.innerText = `#${i}`;
	pokemon.classList.add('pokemon');

	pokemon.appendChild(sprite);
	pokemon.appendChild(number);
	container.append(pokemon);
}
