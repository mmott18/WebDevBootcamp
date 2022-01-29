// for (let i = 1; i <= 10; i++) {
// 	console.log(`Current number: ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
// 	console.log(`Current number: ${i * 2}`);
// }

// for (let i = 0; i <= 20; i++) {
// 	if (i % 2 == 0 && i != 0) {
// 		console.log(`Current number: ${i}`);
// 	}
// }

// for (let i = 0; i <= 20; i += 2) {
// 	console.log(`Current number: ${i}`);
// }
// from here up to line 5 are all different ways
// to print only even numbers from 0 to 20

// for (let i = 100; i >= 0; i -= 10) {
// 	console.log(i);
// }

// const animals = [ 'lions', 'tigers', 'bears' ];

// for (let i = 0; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }

// console.log('Oh my!');

// for (let i = animals.length - 1; i >= 0; i--) {
// 	console.log(i, animals[i]);
// }

// for (let i = 1; i <= 5; i++) {
// 	console.log(`OUTER: ${i}`);
// 	for (let j = 1; j <= 5; j++) {
// 		console.log(`    inner: ${j}`);
// 	}
// }

// const seatingChart = [
// 	[ 'Kristen', 'Erik', 'Namita' ],
// 	[ 'Geoffrey', 'Juanita', 'Antonio', 'Kevin' ],
// 	[ 'Yuma', 'Sakura', 'Jack', 'Erika' ]
// ];

// below (lines 51 to 55) is my solution
// for (let i = 0; i < seatingChart.length; i++) {
// 	for (let j = 0; j < seatingChart[i].length; j++) {
// 		console.log(seatingChart[i][j]);
// 	}
// }

// // below (lines 58 to 63) is colt's solution
// for (let i = 0; i < seatingChart.length; i++) {
// 	const row = seatingChart[i];
// 	console.log(`Row #${i + 1}`);
// 	for (let j = 0; j < row.length; j++) {
// 		console.log(`   ${row[j]}`);
// 	}
// }
