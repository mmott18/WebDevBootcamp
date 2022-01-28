const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const squared = numbers.map(function(num) {
	return num * num;
});
const squaredsquared = squared.map(function(num) {
	return num * num;
});
console.log(squaredsquared);
// numbers.forEach(function(el) {
// 	if (el % 2 === 0) {
// 		console.log(el);
// 	}
// });

// this does the same thing as the above code
// however this has not always existed
// so the above is what was done before for of
// for (let el of numbers) {
// 	console.log(el);
// }

// const movies = [
// 	{
// 		title: 'Amadeus',
// 		score: 99
// 	},
// 	{
// 		title: 'Stand By Me',
// 		score: 85
// 	},
// 	{
// 		title: 'Parasite',
// 		score: 95
// 	},
// 	{
// 		title: 'Alien',
// 		score: 90
// 	}
// ];

// movies.forEach(function(movie) {
// 	console.log(`${movie.title} - ${movie.score}/100`);
// });

// const titles = movies.map(function(movie) {
// 	return movie.title;
// });

// arrow function
// shorter way of writing a function
// lines 53-55 do the same as 46-48
// const titles = movies.map((movie) => {
// 	return movie.title;
// });
// console.log(titles);

// const square = (num) => {
// 	return num * num;
// };

// const rollDie = () => {
// 	return Math.floor(Math.random() * 6) + 1;
// };

// line 68 takes advantage of implicit returns
// it performs the same as lines 62-64
const rollDie = () => Math.floor(Math.random() * 6) + 1;

const add = (a, b) => a + b;

const movies = [
	{
		title: 'Amadeus',
		score: 99
	},
	{
		title: 'Stand By Me',
		score: 85
	},
	{
		title: 'Parasite',
		score: 95
	},
	{
		title: 'Alien',
		score: 90
	}
];

const titles = movies.map((movie) => `${movie.title} : ${movie.score / 10}`);
console.log(titles);
