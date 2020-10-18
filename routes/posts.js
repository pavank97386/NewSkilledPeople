var express = require('express')

var router = express.Router()
var userSchema = require('../schema/registerData')

//insert post
router.post('/',(req,res)=>{
   var datas = new userSchema({
   	"name":req.body.name,
    "emailId":req.body.emailId,
	"mobileNumber":req.body.mobileNumber,
	"fPassword":req.body.fPassword
   })
   
console.log(datas)
   datas.save()
   .then(data=>{
   	res.json(data)
   })
   .catch(err=>{
   	res.json({'message':err})
   })
})


//get All posts
router.get('/',async(req,res)=>{
	try{
			const userData = await userSchema.find().limit(3)
				res.json(userData)
	}	
	catch(err){
		res.json({"message": err})
	}
})


//secific posts
router.get('/:postId',async (req,res)=>{
	 	
	try{
		const result = await userSchema.find({"name": req.params.postId })
		res.json(result)
	}
	catch(err){
		res.json({"message": err})
	}
})

router.delete('/:postName',async(req,res)=>{
	try{
		const deleteUser = await userSchema.remove({"name":req.params.postName})
		res.json(deleteUser)
	}
	catch(err){
		res.json({"message":err})
	}
})

//patch

router.patch('/',(req,res)=>{
	tr
})
module.exports = router