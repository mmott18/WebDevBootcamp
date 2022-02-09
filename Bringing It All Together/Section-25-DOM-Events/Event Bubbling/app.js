const button = document.querySelector('button');
const container = document.querySelector('#container');

function rand256() {
	return parseInt(Math.floor(Math.random() * 256));
}

container.addEventListener('click', () => {
	container.classList.toggle('hide');
});

// when the button is clicked
button.addEventListener('click', (e) => {
	// set container background color to rgb(random, random, random)
	container.style.backgroundColor = `rgb(${rand256()},${rand256()},${rand256()})`;
	e.stopPropagation();
});
