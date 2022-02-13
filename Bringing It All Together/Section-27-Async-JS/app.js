// call stack example
// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);

// const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

// isRightTriangle(3, 4, 5);

// console.log('done');

// web api - setTimeout is passed off to the browser
// once 3 seconds passes, the browser 'reminds' JS to run the callback
console.log('I print first');
setTimeout(() => {
	console.log('I print after 3 seconds');
}, 3000);
console.log('I print second');
