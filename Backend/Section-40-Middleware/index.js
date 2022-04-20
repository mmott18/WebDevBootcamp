const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny');

// app.use(morgan('tiny'));
app.use((req, res, next) => {
	req.requestTime = Date.now();
	console.log(req.method, req.path);
	next();
});

app.use('/dogs', (req, res, next) => {
	console.log('Brewster');
	next();
});

const verifyPassword = (req, res, next) => {
	const { password } = req.query;
	if (password === 'hunter2') {
		next();
	}
	res.send('Incorrect credentials');
};

// app.use((req, res, next) => {
// 	console.log('First middleware');
// 	next();
// });
// app.use((req, res, next) => {
// 	console.log('Second middleware');
// 	next();
// });

app.get('/', (req, res) => {
	console.log(`Request Date: ${req.requestTime}`);
	res.send('Home page');
});

app.get('/dogs', (req, res) => {
	console.log(`Request Date: ${req.requestTime}`);
	res.send('Dogs page');
});

app.get('/secret', verifyPassword, (req, res) => {
	res.send('The secret is: 42');
});

app.use((req, res) => {
	res.status(404);
	res.send('404 Not Found');
});

app.listen(3000, () => {
	console.log('App is running on localhost:3000');
});
