const nums = [ 3, 5, 7, 9, 11, 13, 15, 17, 19 ];

// let sum = nums.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// });

// let subtractAll = nums.reduce((accumulator, currentValue) => {
// 	return accumulator - currentValue;
// });

// let multAll = nums.reduce((accumulator, currentValue) => {
// 	return accumulator * currentValue;
// });

// console.log(sum);
// console.log(subtractAll);
// console.log(multAll);

// const min = nums.reduce((min, currentValue) => {
// 	if (min > currentValue) {
// 		return currentValue;
// 	}
// 	return min;
// });

// const max = nums.reduce((max, currentValue) => {
// 	if (max < currentValue) {
// 		return currentValue;
// 	}
// 	return max;
// });

// console.log(min);
// console.log(max);

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

const oldestMovie = movies.reduce((oldest, current) => {
	if (oldest.year > current.year) {
		return current;
	}
	return oldest;
});

console.log(oldestMovie);

const evens = [ 2, 4, 6, 8 ];
// below, sum is initially set to 100
// then all values in the array are added to 100
const sum = evens.reduce((sum, num) => sum + num, 100);
