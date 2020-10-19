var express = require('express')

var router = express.Router()
var getSignupSchema = require('../schema/user')

router.get('/',async(req,res)=>{
	var getCredential = {
		emailid : req.body.emailid,
		password :req.body.password 
	} 
console.log(getCredential)
	try{
		var result = await getSignupSchema.findOne(getCredential)
		if(result)
			res.send(true)

		else
			res.send(false)
	}
	catch(err){
		res.json({"mess":err})
	}
})

module.exports = router