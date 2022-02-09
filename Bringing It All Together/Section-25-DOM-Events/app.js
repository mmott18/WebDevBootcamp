// const btn2 = document.querySelector('#v2');

// btn2.onclick = function() {
// 	console.log('Clicked!');
// };

// function entered() {
// 	console.log('Entered!');
// }

// btn2.onmouseenter = entered;

// document.querySelector('h1').onmouseleave = () => {
// 	console.log('Left h1');
// };

// const btn3 = document.querySelector('#v3');

// // once btn3 is clicked, on the mouse UP, perform the function
// // in this case, generate an alert
// btn3.addEventListener('mouseup', () => {
// 	alert('Clicked v3, the eventListener button');
// });

// function twist() {
// 	console.log('Twist');
// }
// function shout() {
// 	console.log('Shout');
// }

// const tas = document.querySelector('#tas');
// // we only get shout, as onclick is simply a property
// // and the second definition 'wins'
// // if twist was defined second, then we would
// // see twist 'win'
// // tas.onclick = twist;
// // tas.onclick = shout;

// // this is one reason why addEventListener is superior -
// // we can now run both twist and shout
// tas.addEventListener('click', twist);
// tas.addEventListener('click', shout);

// generate a random number from 0 to 256
function rand256() {
	return Math.floor(Math.random() * 256);
}

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

for (let button of buttons) {
	// when the button is clicked
	button.addEventListener('click', colorize);
}

for (let h1 of h1s) {
	h1.addEventListener('click', colorize);
}

function colorize() {
	this.style.backgroundColor = `rgb(${rand256()},${rand256()},${rand256()})`;
	this.style.color = `rgb(${rand256()},${rand256()},${rand256()})`;
}
