// async function hello() {}

// const sing = async () => {
// 	throw 'Problem';
// 	return 'Do Re Mi';
// };

// sing()
// 	.then((data) => {
// 		// throw new Error('Failed');
// 		// throw 'Thrown String';
// 		console.log(`Resolved with ${data}`);
// 	})
// 	.catch((err) => {
// 		console.log(`Rejected ${err}`);
// 	});

// const login = async (username, password) => {
// 	if (!username || !password) throw 'Missing Credentials';
// 	if (password === 'Hunter12') return 'Logged in';
// 	throw 'Invalid Password';
// };

// login('testUser', 'Hunter12')
// 	.then((msg) => {
// 		console.log('Logged in');
// 		console.log(msg);
// 	})
// 	.catch((err) => {
// 		console.log('Error');
// 		console.log(err);
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
// delayedColorChange('red', 1000)
// 	.then(() => delayedColorChange('orange', 1000))
// 	.then(() => delayedColorChange('yellow', 1000))
// 	.then(() => delayedColorChange('green', 1000))
// 	.then(() => delayedColorChange('blue', 1000))
// 	.then(() => delayedColorChange('indigo', 1000))
// 	.then(() => delayedColorChange('violet', 1000));

// this does the same as the above chained .this(), but is even
// easier to read - orange waits for red, yellow waits for orange,
// and so on. then once violet runs, return complete
async function rainbow() {
	await delayedColorChange('red', 1000);
	await delayedColorChange('orange', 1000);
	await delayedColorChange('yellow', 1000);
	await delayedColorChange('green', 1000);
	await delayedColorChange('blue', 1000);
	await delayedColorChange('indigo', 1000);
	await delayedColorChange('violet', 1000);
	return 'Complete';
}

// rainbow().then(() => {
// 	console.log('End of rainbow');
// });

// this does the same as the above .then(), but allows us to avoid
// using .then() - just a bit easier to read
// async function printRainbow() {
// 	await rainbow();
// 	console.log('End of rainbow');
// }

// printRainbow();

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Connection Timeout');
			} else {
				resolve(`Here is your fake data from ${url}`);
			}
		}, delay);
	});
};

async function makeTwoRequests() {
	try {
		let data1 = await fakeRequest('/page1');
		console.log(data1);
		let data2 = await fakeRequest('/page2');
		console.log(data2);
	} catch (e) {
		console.log(e);
	}
}
