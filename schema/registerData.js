var mongoose = require('mongoose')


var user = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
    emailId:{
		type:String,
		required:true
    },
	mobileNumber:{
	    type:String,
		required:true
    },
	fPassword:{
		type:String,
		required:true
    },
})

module.exports = mongoose.model('user',user)