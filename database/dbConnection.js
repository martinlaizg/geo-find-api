var mongoose = require('mongoose')

require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_COMPLETE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err, res) => {
	if (err) throw err
	console.log('Connected to database')
});

exports.connection