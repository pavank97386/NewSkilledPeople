 var express = require('express')

var router = express.Router()

var newUserSchema = require('../schema/user')

router.post('/', (req,res)=>{
	 var data = new newUserSchema({
	 	name:req.body.name,
	 	emailid:req.body.emailid,
	 	mobile:req.body.mobile,
	 	password:req.body.password
	 })
 	      
 	     data.save()
 		 .then(data=>{
 		 	res.json(data)
 		 })
 		 .catch(err=>{
 		 	res.json({'mess':err})
 		 })
 	 
 	 
})


router.get('/',async(req,res)=>{
	try{
		var result = await newUserSchema.find()
		res.json(result)
	}
	catch(err){
		res.send(err)
	}
})

module.exports = router