const fakeRequestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Connection Timeout');
		} else {
			success(`Here is your fake data from ${url}`);
		}
	}, delay);
};

const fakeRequestPromise = (url) => {
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

// as is apparent below, using callbacks can get very nested and
// confusing very quickly - exactly what people are referring to
// when they say 'callback hell'
// fakeRequestCallback(
// 	'books.org/page1',
// 	function(response) {
// 		console.log('Success');
// 		console.log(response);
// 		fakeRequestCallback(
// 			'books.org/page2',
// 			function(response) {
// 				console.log(`Success, ${response}`);
// 				fakeRequestCallback(
// 					'books.org/page3',
// 					function(response) {
// 						console.log(`Success, ${response}`);
// 					},
// 					function(err) {
// 						console.log(`Error: ${err}`);
// 					}
// 				);
// 			},
// 			function(err) {
// 				console.log(`Error: ${err}`);
// 			}
// 		);
// 	},
// 	function(err) {
// 		console.log('Error');
// 		console.log(err);
// 	}
// );

// .then() runs if the promise is resovled
// .catch runs if the promise is rejected
// fakeRequestPromise('books.org/page1')
// 	.then((res) => {
// 		console.log(`Success ${res}`);
// 		fakeRequestPromise('books.org/page2')
// 			.then((res) => {
// 				console.log(`Success ${res}`);
// 				fakeRequestPromise('books.org/page3')
// 					.then((res) => {
// 						console.log(`Success ${res}`);
// 					})
// 					.catch((err) => {
// 						console.log(`Error ${err}`);
// 					});
// 			})
// 			.catch((err) => {
// 				console.log(`Error ${err}`);
// 			});
// 	})
// 	.catch((err) => {
// 		console.log(`Error ${err}`);
// 	});

// This is the magic of promises - no nesting necessary
// can just chain .then() and use a single .catch() at the very end
fakeRequestPromise('books.org/page1')
	.then((data) => {
		console.log(`Success page 1 ${data}`);
		return fakeRequestPromise('books.org/page2');
	})
	.then(() => {
		console.log(`Success page 2`);
		return fakeRequestPromise('books.org/page3');
	})
	.then(() => {
		console.log(`Success page 3`);
	})
	.catch((err) => {
		console.log(`Failure ${err}`);
	});
