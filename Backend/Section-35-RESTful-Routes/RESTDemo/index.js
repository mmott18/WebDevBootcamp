const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tacos', (req, res) => {
	res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
	const { meat, qty } = req.body;
	res.send(`You ordered ${qty} ${meat} tacos.`);
});

app.get('/comments', (req, res) => {});

app.post('/comments', (req, res) => {});

app.get('/comments/:id', (req, res) => {});

app.patch('/comments/:id', (req, res) => {});

app.delete('/comments/:id', (req, res) => {});

app.listen(3000, () => {
	console.log('On port 3000');
});
