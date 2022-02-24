// XHR example
// const request = new XMLHttpRequest();

// request.onload = function() {
// 	const data = JSON.parse(this.responseText);
// 	console.log(data[0].show.name);
// };
// request.onerror = function(err) {
// 	console.log('Error:', err);
// };
// request.open('GET', 'https://api.tvmaze.com/search/shows?q=girls', true);
// request.setRequestHeader('Accept', ' application/json');
// request.send();

// does the same exact thing as above, using fetch api with promises
// much better than XHRs
// fetch('https://api.tvmaze.com/search/shows?q=girls')
// 	.then((res) => {
// 		console.log('Response, waiting to parse', res);
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log('Data parsed:', data);
// 		console.log('Show name:', data[0].show.name);
// 	})
// 	.catch((e) => {
// 		console.log('Error:', e);
// 	});

// now for the same, also using fetch api, but as an async function
// even nicer than above, shorter and flatter
// const fetchShows = async () => {
// 	try {
// 		const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
// 		const data = await res.json();
// 		console.log(data[0].show.name);
// 	} catch (e) {
// 		console.log('Error:', e);
// 	}
// };

// returns a promise which is only resolved once everything is finished
// so, we get all of our data and it is parsed without having to add
// code to wait for it
// axios
// 	.get('https://api.tvmaze.com/search/shows?q=girls')
// 	.then((res) => {
// 		console.log(res.data[0].show.name);
// 	})
// 	.catch((err) => {
// 		console.log('Error:', err);
// 	});

const fetchShows = async () => {
	try {
		const res = await axios.get('https://api.tvmaze.com/search/shows?q=girls');
		console.log(res.data[0].show.name);
	} catch (e) {
		console.log('Error:', e);
	}
};

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
	const newJoke = await getDadJoke();
	const newLI = document.createElement('LI');
	newLI.append(newJoke);
	jokes.append(newLI);
};

const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } };
		const res = await axios.get('https://icanhazdadjoke.com/', config);
		return res.data.joke;
	} catch (e) {
		return e;
	}
};

button.addEventListener('click', addNewJoke);
