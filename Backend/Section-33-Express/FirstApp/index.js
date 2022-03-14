const express = require('express');
const app = express();

// any time we get an incoming request
// this code runs
app.use((req, res) => {
	// res.send({ color: 'red' });
	res.send('<h1>Welcome to the webpage</h1>');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
