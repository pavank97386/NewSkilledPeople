var express = require('express')

var app =  express();
require('dotenv/config')
var mongoose = require('mongoose')
const bodyParser = require("body-parser")
var cors = require('cors')


//routes  paths
var signup = require('./routes/signup')
var login = require('./routes/login')
var enterDataSkilset = require('./routes/skillSets') 


//middle wares
app.use(cors())
app.use(bodyParser.json())



//routes  
app.use('/signup',signup)
app.use('/login',login)






//connect tp db
mongoose.connect("mongodb://127.0.0.1/SocialApp", { useNewUrlParser: true },()=>{
	console.log("Connected to DB Pavan")
})


 app.listen(4000,()=>{
 	console.log("connected to 4000")
 })