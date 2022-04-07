const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connection open');
	})
	.catch((err) => {
		console.log(`Error: ${err}`);
	});

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 20
	},
	price: {
		type: Number,
		required: true,
		min: [ 0, 'Price must be above 0' ]
	},
	isOnSale: {
		type: Boolean,
		default: false
	},
	categories: {
		type: [ String ],
		default: [ 'cycling' ]
	},
	qty: {
		online: {
			type: Number,
			default: 0
		},
		inStore: {
			type: Number,
			default: 0
		}
	},
	size: {
		type: String,
		enum: [ 'S', 'M', 'L' ]
	}
});

// productSchema.methods.greet = function() {
// 	console.log(`Hello from ${this.name}`);
// };

productSchema.methods.toggleSale = async function() {
	this.isOnSale = !this.isOnSale;
	return this.save();
};

productSchema.methods.reducePrice = async function() {
	this.price = this.price * 0.8;
	return this.save();
};

productSchema.methods.addCategory = async function(newCat) {
	this.categories.push(newCat);
	return this.save();
};

productSchema.statics.fireSale = async function() {
	return this.updateMany({}, { isOnSale: true, price: 0 });
};

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
	const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
	console.log(foundProduct);
	await foundProduct.toggleSale();
	await foundProduct.reducePrice();
	await foundProduct.addCategory('Sale!');
	console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));

// findProduct();

// const bike = new Product({
// 	name: 'Recreational Bike',
// 	price: 399.99,
// 	isOnSale: true,
// 	categories: [ 'Cycling' ],
// 	size: 'M'
// });
// bike
// 	.save()
// 	.then((data) => {
// 		console.log(`Success: ${data}`);
// 	})
// 	.catch((err) => {
// 		console.log(`Failed: ${err}`);
// 	});

// Product.findOneAndUpdate({ name: 'Tire Pump ' }, { price: -10.99 }, { new: true, runValidators: true })
// 	.then((data) => {
// 		console.log(`Success: ${data}`);
// 	})
// 	.catch((err) => {
// 		console.log(`Failed: ${err}`);
// 	});
