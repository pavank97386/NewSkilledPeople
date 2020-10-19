 var express = require('express')

 var app =  express();
 require('dotenv/config')
var mongoose = require('mongoose')
const bodyParser = require("body-parser")

//routes 
 var signup = require('./routes/signup')

 
//middle wares


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/signup',signup)

//connect tp db
mongoose.connect("mongodb://127.0.0.1/SocialApp", { useNewUrlParser: true },()=>{
	console.log("Connected to DB Pavan")
})


 app.listen(4000,()=>{
 	console.log("connected to 4000")
 })