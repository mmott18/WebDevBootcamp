const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
	.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Mongo Connection open');
	})
	.catch((err) => {
		console.log(`Mongo Error: ${err}`);
	});

// const p = new Product({
// 	name: 'Strawberry',
// 	price: 0.1,
// 	category: 'fruit'
// });
// p
// 	.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const seedProducts = [
	{
		name: 'Spinach',
		price: 0.29,
		category: 'vegetable'
	},
	{
		name: 'Whole Milk',
		price: 1.29,
		category: 'dairy'
	},
	{
		name: 'Gala Apple',
		price: 0.59,
		category: 'Fruit'
	},
	{
		name: 'Sweet Corn',
		price: 1.09,
		category: 'vegetable'
	},
	{
		name: 'Seedless Green Grapes',
		price: 1.19,
		category: 'fruit'
	},
	{
		name: 'Mozzerella',
		price: 1.89,
		category: 'dairy'
	}
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});
