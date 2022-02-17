// creating our own promises
// this function returns a new promise where resolve is the success
// and reject is the failure - these are expected by Promise()
// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		const rand = Math.random();
// 		setTimeout(() => {
// 			if (rand < 0.75) {
// 				resolve('Successful random');
// 			} else {
// 				reject('Error');
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest('/dogs/1')
// 	.then((data) => {
// 		console.log(`Done with request - ${data}`);
// 	})
// 	.catch((err) => {
// 		console.log(`Failure - ${err}`);
// 	});

const delayedColorChange = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

// implicit return - return is needed in order to chain .then()
// this is much easier to read than the earlier delayedColorChange
// from earlier in the seciton, also minimally nested
delayedColorChange('red', 1000)
	.then(() => delayedColorChange('orange', 1000))
	.then(() => delayedColorChange('yellow', 1000))
	.then(() => delayedColorChange('green', 1000))
	.then(() => delayedColorChange('blue', 1000))
	.then(() => delayedColorChange('indigo', 1000))
	.then(() => delayedColorChange('violet', 1000));
