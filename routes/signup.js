var express = require("express")

var router = express.Router()

var getNewUserSchema = require('../schema/newUserData')
 
router.post('/',async(req,res)=>{
	var data = new getNewUserSchema({
		"name":req.body.name,
		"emailid":req.body.emailid,
		"mobile":req.body.mobile,
	})

	try{
		const result = await data.save()
		res.json(result)
	}
	catch(err){
		res.json(err)
	}
})
module.exports = router