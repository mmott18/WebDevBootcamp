// old way for default params
// function rollDie(numSides) {
// 	if (numSides === undefined) {
// 		numSides = 6;
// 	}
// 	return Math.floor(Math.random() * numSides) + 1;
// }

// new way of default params
function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'Hello') {
	console.log(`${msg}, ${person}!`);
}

const cats = [ 'Sophie', 'Jazzy', 'Elsa' ];
const dogs = [ 'Ginger', 'Rosie', 'Brewster' ];

// spread arrays and combine into a new array
const allPets = [ ...cats, ...dogs ];

// canine "wins" the conflict of family elements as it
// comes second
// is feline came second, the family would be 'Felidae'
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };

const dataFromForm = {
	email: 'blueman@gmail.com',
	password: 'tobias123!',
	username: 'tfunke'
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// ...nums is an example of rest
// creates an array of parameters that we can loop through
// to allow a user/us to add as many parameters
// as we want
// called rest because it collects the 'rest'
// of the values
function sum(...nums) {
	return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
	console.log(`Gold medal goes to: ${gold}`);
	console.log(`Silver medal goes to: ${silver}`);
	console.log(`And thanks to: ${everyoneElse}`);
}

const scores = [ 991243, 329823, 893894, 992499, 439133, 389983, 993249, 987654 ];
// first is set to scores[0]
// second is set to scores[1]
// etc.
const [ first, second ] = scores;

const user = {
	email: 'harvey@gmail.com',
	password: 'sCoTt1948sMiTh',
	firstName: 'Harvey',
	lastName: 'Milk',
	born: 1930,
	died: 1978,
	bio: 'Harvey Bernard Milk was an American politician',
	city: 'San Francsico',
	state: 'California'
};

const user2 = {
	email: 'jeff@gmail.com',
	firstName: 'Jeff',
	lastName: 'Dude',
	born: 1990,
	city: 'Madison',
	state: 'Wisconsin'
};
// three new variables
// note that the variable names must match
// the names of properties within the object
// bio:biography copies the biography property
// into a variable called biography
// const { bio: biography, born, password } = user;

// died is set below by default to 'N/A'
// if died exists within the object, that value
// will be used instead of N/A
const { city, state, died = 'N/A' } = user2;

// function fullName(user) {
// 	const { firstName, lastName } = user;
// 	return `${firstName} ${lastName}`;
// }

function fullname({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}
