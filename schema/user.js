const mongoose = require('mongoose')


const newUser = new   mongoose.Schema({
	name:{
		type:String
	},
	emailid:{
		type:String
	},
	mobile:{
		type:String
	}
});

module.exports = mongoose.model('newUser',newUser)