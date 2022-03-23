const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
	{
		id: 1,
		username: 'Todd',
		comment: 'lol'
	},
	{
		id: 2,
		username: 'Skyler',
		comment: 'I like to go birdwatching with my dog'
	},
	{
		id: 3,
		username: 'Sk8erBoi',
		comment: 'Plz delete your account, Todd'
	},
	{
		id: 4,
		username: 'onlysayswoof',
		comment: 'woof woof woof'
	}
];

app.get('/tacos', (req, res) => {
	res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
	const { meat, qty } = req.body;
	res.send(`You ordered ${qty} ${meat} tacos.`);
});

app.get('/comments', (req, res) => {
	res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
	res.render('comments/new', { comments });
});

app.post('/comments', (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment });
	res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === parseInt(id));
	res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {});

app.delete('/comments/:id', (req, res) => {});

app.listen(3000, () => {
	console.log('On port 3000');
});
