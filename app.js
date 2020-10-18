var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
require('dotenv/config')

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//import routes
const postRoutes = require('./routes/posts')
const signup = require('./routes/signup')


//connect Db 
app.use('/posts',postRoutes)
app.use('/signup',signup)
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
	console.log("conected ")
})

 

app.listen(process.env.PORT)