document.querySelector('button').addEventListener('click', function(evt) {
	console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(evt) {
// 	console.log(evt.key);
// 	console.log(evt.code);
// });

// input.addEventListener('keyup', function() {
// 	console.log('KEYUP');
// });

window.addEventListener('keydown', function(evt) {
	switch (evt.code) {
		case 'ArrowUp':
			console.log('UP');
			break;
		case 'ArrowDown':
			console.log('DOWN');
			break;
		case 'ArrowRight':
			console.log('RIGHT');
			break;
		case 'ArrowLeft':
			console.log('LEFT');
			break;
		default:
			console.log('IGNORED');
	}
});
