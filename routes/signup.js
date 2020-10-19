var express = require('express')

var router = express.Router()

var newUserSchema = require('../schema/user')

router.post('/',(req,res)=>{
	 var data = new newUserSchema({
	 	name:req.body.name,
	 	emailid:req.body.emailid,
	 	mobile:req.body.mobile
	 })
 	data.save()
 	.then(datas=>{
 		res.json(datas)
 		 
 	})
 	.catch(err =>{
 		res.json({"mesasge":err})
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