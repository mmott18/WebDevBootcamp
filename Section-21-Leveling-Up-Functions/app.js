// function greet() {
// 	console.log('Hello!');
// }

// function runTwice(func) {
// 	func();
// 	func();
// }

// runTwice(greet);

// function makeMysterFunc() {
// 	const rand = Math.random();
// 	if (rand > 0.5) {
// 		return function() {
// 			console.log('You win!');
// 		};
// 	} else {
// 		return function() {
// 			alert('You lose!');
// 			alert('You lose!');
// 			alert('You lose!');
// 			alert('You lose!');
// 			alert('You lose!');
// 			alert('You lose!');
// 		};
// 	}
// }

// const mystery = makeMysterFunc();

// function makeBetweenFunc(min, max) {
// 	return function(num) {
// 		return num >= min && num <= max;
// 	};
// }

// let userMin = prompt('Enter a minimum number');
// let userMax = prompt('Enter a maximum number');

// const compare = makeBetweenFunc(parseInt(userMin), parseInt(userMax));

// let userInput = prompt('Enter a number to check');
// console.log(compare(userInput));

// original syntax
// const math = {
// 	multiply: function(x, y) {
// 		return parseInt(x) * parseInt(y);
// 	},
// 	divide: function(x, y) {
// 		return parseInt(x) / parseInt(y);
// 	},
// 	square: function(x) {
// 		return parseInt(x) * parseInt(x);
// 	}
// };

// shorthand syntax
// const math = {
// 	multiply(x, y) {
// 		return parseInt(x) * parseInt(y);
// 	},
// 	divide(x, y) {
// 		return parseInt(x) / parseInt(y);
// 	},
// 	square(x) {
// 		return parseInt(x) * parseInt(x);
// 	}
// };

// let choice = '';
// let x = 0;
// let y = 0;

// while (choice != 'quit') {
// 	choice = prompt('Multiply, divide, square, or quit?');
// 	if (choice.toString().toLowerCase() === 'multiply') {
// 		x = prompt('Enter a number');
// 		y = prompt('Enter another number');
// 		console.log(`Result is ${math.multiply(x, y)}`);
// 	} else if (choice.toString().toLowerCase() === 'divide') {
// 		x = prompt('Enter a number');
// 		y = prompt('Enter another number');
// 		console.log(`Result is ${math.divide(x, y)}`);
// 	} else if (choice.toString().toLowerCase() === 'square') {
// 		x = prompt('Enter a number');
// 		console.log(`Result is ${math.square(x)}`);
// 	} else if (choice.toString().toLowerCase() === 'quit') {
// 		console.log('Goodbye.');
// 	} else {
// 		console.warn(`${choice} is an invalid entry.`);
// 	}
// }

const cat = {
	name: 'Sophie',
	breed: 'Calico',
	age: 5,
	meow() {
		console.log(`${this.name} says: Meow!`);
	}
};

const meow2 = cat.meow;
