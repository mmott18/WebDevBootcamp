// function randomNum(range) {
// 	return Math.floor(Math.random() * range) + 1;
// }

// let num = prompt('Enter a number:');
// console.log(randomNum(num));

// function greeter(firstName, lastName) {
// 	console.log(`Hello there, ${firstName} ${lastName}`);
// }

// let first = prompt('Enter your first name:');
// let last = prompt('Enter your last name:');

// greeter(first, last);

function reverseString(toReverse) {
	let charArray = [];
	for (let char of toReverse) {
		charArray.unshift(char);
	}
	return charArray.join('');
}

let string = prompt('Enter a string to reverse:');
alert(reverseString(string));
