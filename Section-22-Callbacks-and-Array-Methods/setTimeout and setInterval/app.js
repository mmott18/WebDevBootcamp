// after 3 seconds, log Hello
// both 'Before' and 'After' will be printed
// immediately, before 'Hello' is printed
console.log('Before');
setTimeout(() => {
	console.log('Hello');
}, 3000);
console.log('After');

// every 2 seconds, generate a random decimal
const id = setInterval(() => {
	console.log(Math.random());
}, 2000);
