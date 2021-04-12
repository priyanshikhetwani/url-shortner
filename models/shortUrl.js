const mongoose = require('mongoose');
const shortid = require('shortid');


const shortUrlSchema = new mongoose.Schema({
	full: {
		type: String,
		required: true
	},
	short: {
		type: String,
		required: true,
		default: shortid.generate
	},
	clicks: {
		type: Number,
		required: true,
		default: 0
	}
});


module.exports = mongoose.model('ShortUrl', shortUrlSchema);		//This was ShortUrl before(first one)


// install shortid library
// npm i shortid