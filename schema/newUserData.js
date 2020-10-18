var mongoose = require('mongoose')

const userNewData = new mongoose.Schema({
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
	}
}) 

module.exports = mongoose.model("newUser", userNewData)