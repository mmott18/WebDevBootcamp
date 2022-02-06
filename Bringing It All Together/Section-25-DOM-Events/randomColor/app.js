const colorLister = document.querySelector('#color');
const changeColorBtn = document.querySelector('#changeColorBtn');

// generate a random number from 0 to 256
function rand256() {
	return parseInt(Math.floor(Math.random() * 256));
}

// when the button is clicked
changeColorBtn.addEventListener('click', () => {
	// set body background color to rgb(random, random, random)
	document.body.style.backgroundColor = `rgb(${rand256()},${rand256()},${rand256()})`;
	// set h1 to display whatever the background rgb value is
	colorLister.innerText = document.body.style.backgroundColor;
});
