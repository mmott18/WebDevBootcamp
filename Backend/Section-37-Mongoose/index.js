const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/moviesDb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connection open');
	})
	.catch((err) => {
		console.log(`Error: ${err}`);
	});

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String,
	inTheaters: Boolean
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R', inTheaters: false });
// amadeus.save();

// Movie.insertMany([
// 	{
// 		title: 'Death on the Nile',
// 		year: 2022,
// 		score: 7.8,
// 		rating: 'R',
// 		inTheaters: true
// 	},
// 	{
// 		title: "Harry Potter and the Sorcerer's Stone",
// 		year: 2001,
// 		score: 9.0,
// 		rating: 'PG',
// 		inTheaters: false
// 	},
// 	{
// 		title: 'Morbius',
// 		year: 2022,
// 		score: 7.1,
// 		rating: 'PG-13',
// 		inTheaters: true
// 	},
// 	{
// 		title: 'The Lion King',
// 		year: 1994,
// 		score: 9.3,
// 		rating: 'G',
// 		inTheaters: false
// 	},
// 	{
// 		title: 'Stand By Me',
// 		year: 1986,
// 		score: 8.6,
// 		rating: 'R',
// 		inTheaters: false
// 	}
// ]).then((data) => {
// 	console.log('Inserted successfully');
// 	console.log(data);
// });
