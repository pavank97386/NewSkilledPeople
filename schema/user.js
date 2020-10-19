const mongoose = require('mongoose')


const newUser = new   mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	emailid:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model('newUser',newUser)