const person = {
	firstName: 'Viggo',
	lastName: 'Mortensen',
	// as the below is an arrow function,
	// 'this' refers to the scope it was created in,
	// which in this case is the window object
	// fullName: () => {
	// 	return `${this.firstName} ${this.lastName}`;
	// },

	// as a regular function, 'this' works
	// as expected and creates the fullName
	// using the firstName and lastName
	fullName: function() {
		return `${this.firstName} ${this.lastName}`;
	},

	// this.fullName is not a function
	// setTimeout is a method on the window
	// so we see an error due to scope
	// shoutName: function() {
	// 	setTimeout(function() {
	// 		console.log(this.fullName());
	// 	}, 3000);
	// }

	// with an arrow function, we no longer
	// receieve an error, but rather
	// 'undefined undefined'
	shoutName: function() {
		setTimeout(() => {
			console.log(this.fullName());
		}, 3000);
	}
};
