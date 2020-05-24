const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config()
mongoose.connect(process.env.URL_M, {useUnifiedTopology: true,useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("connecting....")
})
app.use(cors())
const booklistRouters = require('./routes/booklist.router')


const port = 4000; 



app.use(express.json())  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("12eewfiowejfiowej"))


app.use("/books",booklistRouters);



//Satic file
app.use(express.static('public'))
// Listening
app.listen(port, function(){
    console.log('Server listen on port' + port);
  });
  