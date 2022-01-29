// const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const evens = nums.filter((n) => {
// 	return n % 2 === 0;
// });

// const smallNums = nums.filter((n) => n < 5);

const movies = [
	{
		title: 'Sharknado',
		score: 35,
		year: 2013
	},
	{
		title: '13 Going On 30',
		score: 70,
		year: 2004
	},
	{
		title: 'Waterworld',
		score: 62,
		year: 1995
	},
	{
		title: 'Amadeus',
		score: 99,
		year: 1984
	},
	{
		title: 'Stand By Me',
		score: 85,
		year: 1986
	},
	{
		title: 'Jingle All The Way',
		score: 71,
		year: 1996
	},
	{
		title: 'Parasite',
		score: 95,
		year: 2019
	},
	{
		title: 'Alien',
		score: 90,
		year: 1979
	},
	{
		title: 'Notting Hill',
		score: 77,
		year: 1999
	}
];

const bestFilms = movies.filter((movie) => movie.score >= 90);

const badFilms = movies.filter((movie) => movie.score < 70);

const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

const validUserNames = (array) => array.filter((el) => el.length < 10);
