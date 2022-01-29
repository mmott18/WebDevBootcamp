const exams = [ 80, 98, 92, 78, 77, 90, 89, 84, 81, 77 ];

console.log(`Every score above 90: ${exams.every((score) => score >= 90)}`);
console.log(`Some scores above 90: ${exams.some((score) => score >= 90)}`);

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

console.log(`Any films made before 1975: ${movies.some((movie) => movie.year < 1975)}`);
console.log(`Any films made after 1975: ${movies.some((movie) => movie.year > 1975)}`);
console.log(`All films made after 1980: ${movies.every((movie) => movie.year > 1980)}`);
console.log(`All films made before 2022: ${movies.every((movie) => movie.year < 2022)}`);

const allEvens = (numArray) => numArray.every((num) => num % 2 === 0);
