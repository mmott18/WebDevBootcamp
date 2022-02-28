// below adds an additional method that we define to the
// String prototype object
// String.prototype.yell = function() {
// 	return `It's ${this.toUpperCase()}`;
// };

// makes an object which starts empty, but then properties and methods are added
// this is a factory function
// function rgb(r, g, b) {}

// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const { r, g, b } = this;
// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	};
// 	return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

// adds the rgb function to the prototype for Color
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// if we don't use the new keyword, 'this' refers to the
// window object, but when we use new, a new object will be created
// based off of the defined pattern
const myColor = new Color(20, 50, 90);
const myColor2 = new Color(40, 40, 40);

// these don't do anything yet as we have not defined
// the logic for the object/prototype
// const navColor = new Color('carrot', [ 230, 126, 34 ]);
// const logoColor = new Color('emerald', [ 46, 204, 113 ]);
