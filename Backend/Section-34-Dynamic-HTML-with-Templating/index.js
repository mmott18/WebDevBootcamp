const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
	// do not need to specify .ejs due to
	// using app.set to set the view engine
	// to ejs. similarly, do not need to
	// specify views/home.ejs as the views
	// folder is the default place it looks
	res.render('home');
});

app.get('/rand', (req, res) => {
	const rand = Math.floor(Math.random() * 1000) + 1;
	res.render('random', { rand: rand });
});

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.render('subreddit', { subreddit });
});

app.listen(3000, () => {
	console.log('Listening on Port 3000');
});
