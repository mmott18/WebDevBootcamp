const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/moviesDb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connection open');
	})
	.catch((err) => {
		console.log(`Error: ${err}`);
	});
