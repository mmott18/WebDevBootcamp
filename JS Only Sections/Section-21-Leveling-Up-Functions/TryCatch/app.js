// try {
// 	hello.toUpperCase();
// } catch (e) {
// 	console.error('ERROR');
// }
// console.log('Outside of try catch');

function yell(msg) {
	try {
		console.log(msg.toUpperCase().repeat(3));
	} catch (e) {
		console.log(e);
	}
}

let message = prompt('Enter a yell');
yell(message);
yell(3);
console.log('after');
