// example object
const fitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutsThisWeek: '5 of 7',
	avgGoodSleep: '2:13'
};

const person = {
	firstName: 'TestUser',
	lastName: 'Smith',
	dob: '05/05/1990'
};

const kitchenSink = {
	num: 102,
	isFunny: true,
	colors: [ 'purple', 'blue' ],
	phrase: 'banana',
	isNull: null
};

console.log(fitBitData.avgCalorieBurn);
console.log(person.dob);

console.log(`Last name before updating: ${person.lastName}`);
person.lastName = 'Johnson';
console.log(`Last name after updating: ${person.lastName}`);
console.log(`ZIP before updating: ${person['zipCode']}`);
person.zipCode = 19034;
console.log(`ZIP after updating: ${person['zipCode']}`);

// an array consisting of multiple objects
const shoppingCart = [
	{
		product: 'Jenga Classic',
		price: 6.88,
		quantity: 1
	},
	{
		product: 'Echo Dot',
		price: 29.99,
		quantity: 3
	},
	{
		product: 'Fire Stick',
		price: 39.99,
		quantity: 2
	}
];
// access the product for the 2nd entry
// should be 'Echo Dot'
console.log(shoppingCart[1].product);
