let letters = [ 'a', 'b', 'c' ];

// letters[letters.length] = prompt('Enter something');

// // add user input to the end of the array
// letters.push(prompt('Enter something:'));
// console.log(letters);
// // remove the last element of the array
// // and store it in a variable
// let userInput = letters.pop();
// console.log(letters);
// console.log(userInput);

// // add user input to the start of the array
// letters.unshift(prompt('Enter something:'));
// console.log(letters);
// // remove the first element of the array
// // and store it in a variable
// let input = letters.shift();
// console.log(letters);
// console.log(input);
// console.log(letters.join());

let cats = [ 'Sophie', 'Jazzy', 'Elsa' ];
let dogs = [ 'Ginger', 'Rosie', 'Brewster' ];

// combine the cats and dogs arrays
// if we did dogs.concat(cats); the dog names
// would come first
let catDogs = cats.concat(dogs);
console.log(catDogs);
console.log(catDogs.reverse());

let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
console.log(colors.slice(2, 4));
// replace 2 elements starting at index 3
colors.splice(3, 2, 'magenta', 'teal');
console.log(colors);
// delete 1 element starting at index 2
colors.splice(2, 1);
console.log(colors);
// add 1 element (0) starting at index 3
colors.splice(3, 0, 'white');
console.log(colors);
// sort the array of strings
console.log(colors.sort());

let nums = [ 1, 20, 80, 101010 ];
// sort the array of nums
console.log(nums.sort());

// secondArray is linked to firstArray
let firstArray = [ 1, 2, 3 ];
let secondArray = firstArray;
// changes made to firstArray also propagate to secondArray
firstArray.push(4);
console.log(secondArray);
console.log('First array is equal to second array: ' + (firstArray === secondArray));

const myEggs = [ 'brown', 'brown' ];
// the following two lines are acceptable
// will not cause an error
myEggs.push('purple');
myEggs[0] = 'green';
// the following line will cause an error
// myEggs = [ 'blue', 'pink' ];
// const colors = [ [ 'red', 'crimson' ], [ 'orange', 'dark orange' ], [ 'yellow', 'goldenrod' ], [ 'green', 'olive' ] ];

const board = [ [ 'O', null, 'X' ], [ null, 'X', 'O' ], [ 'X', 'O', null ] ];
// log the 'center' space on the board - 'X'
console.log(board[1][1]);
