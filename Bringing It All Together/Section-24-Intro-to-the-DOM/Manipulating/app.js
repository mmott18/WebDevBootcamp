const allLinks = document.querySelectorAll('a');
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	img.src =
// 		'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
// }

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
	img.src =
		'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
}

for (let link of allLinks) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
