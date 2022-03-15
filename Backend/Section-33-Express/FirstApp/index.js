const express = require('express');
const app = express();

// any time we get an incoming request
// this code runs
// app.use((req, res) => {
// 	// res.send({ color: 'red' });
// 	res.send('<h1>Welcome to the webpage</h1>');
// });

// /cats => 'meow'
// /dogs => 'woof'
// / => welcome to the home page

// direct route match, only runs when a request is exactly asking
// for /cats but nothing else
app.get('/cats', (req, res) => {
	res.send('<h1>Meow</h1>');
});

// will match with anything that follows the pattern of
// /r/anything
app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.send(`Welcome to the ${subreddit} subreddit!`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
	const { subreddit, postId } = req.params;
	res.send(`Viewing Post ID: ${postId} on the ${subreddit} subreddit`);
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send('Nothing found if nothing searched');
	}
	res.send(q);
});

app.post('/cats', (req, res) => {
	res.send('<h1>Post Meowlone</h1>');
});

app.get('/dogs', (req, res) => {
	res.send('<h1>Meow</h1>');
});

app.get('/', (req, res) => {
	res.send('<h1>Welcome to the home page!</h1>');
});

// important to put at the end, because if this is put at the start,
// none of the other .get responses will be sent out
// this essentially catches everything else that doesn't get caught
// by the above
app.get('*', (req, res) => {
	res.send('<h1>Default Page</h1>');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
