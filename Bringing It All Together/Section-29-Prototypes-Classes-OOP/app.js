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

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// adds the rgb function to the prototype for Color
// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function() {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function(a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// if we don't use the new keyword, 'this' refers to the
// window object, but when we use new, a new object will be created
// based off of the defined pattern
// const myColor = new Color(20, 50, 90);
// const myColor2 = new Color(40, 40, 40);

// these don't do anything yet as we have not defined
// the logic for the object/prototype
// const navColor = new Color('carrot', [ 230, 126, 34 ]);
// const logoColor = new Color('emerald', [ 46, 204, 113 ]);

class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}
	// methods are added to the prototype automatically
	// no need for Color.prototype.rgba = ...
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	hex() {
		// anytime we're inside of a class,
		// 'this' refers to the instance of the class
		// below, we are destructuring r, g, and b from 'this'
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%,${l}%)`;
	}
	fullySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%,${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%,${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const navColor = new Color(230, 126, 34, 'carrot');
const white = new Color(255, 255, 255, 'white');
