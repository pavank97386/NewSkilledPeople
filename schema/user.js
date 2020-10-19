var mongoose = require('mongoose')


var user =  mongoose.Schema({
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

module.exports = mongoose.model('user',user)