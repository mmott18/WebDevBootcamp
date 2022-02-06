const btn2 = document.querySelector('#v2');

btn2.onclick = function() {
	console.log('Clicked!');
};

function entered() {
	console.log('Entered!');
}

btn2.onmouseenter = entered;

document.querySelector('h1').onmouseleave = () => {
	console.log('Left h1');
};

const btn3 = document.querySelector('#v3');

// once btn3 is clicked, on the mouse UP, perform the function
// in this case, generate an alert
btn3.addEventListener('mouseup', () => {
	alert('Clicked v3, the eventListener button');
});

function twist() {
	console.log('Twist');
}
function shout() {
	console.log('Shout');
}

const tas = document.querySelector('#tas');
// we only get shout, as onclick is simply a property
// and the second definition 'wins'
// if twist was defined second, then we would
// see twist 'win'
// tas.onclick = twist;
// tas.onclick = shout;

// this is one reason why addEventListener is superior -
// we can now run both twist and shout
tas.addEventListener('click', twist);
tas.addEventListener('click', shout);
