let password = prompt('Enter a password');
const day = 20;

switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
	case 7:
		console.log('Weekend');
		break;
	default:
		console.log('Invalid number');
}

while (!password) {
	password = prompt('Try again!');
}
// the while loop was not covered in this section
// but i wanted to put it in anyway for fun
if (password.length >= 6 && !password.includes(' ')) {
	console.log(password);
} else if (password.length <= 6 || password.includes(' ')) {
	console.warn('Invalid Password: Must be at least 6 characters and NOT contain any spaces');
} else {
	console.error('How did you get here?');
}
