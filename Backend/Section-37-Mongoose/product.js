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
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	isOnSale: {
		type: Boolean
	}
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Racing Bike', price: 1199, color: 'Red' });
bike
	.save()
	.then((data) => {
		console.log(`Success: ${data}`);
	})
	.catch((err) => {
		console.log(`Failed: ${err}`);
	});
