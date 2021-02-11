const dotenv=require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const bodyParser=require("body-parser");
const routes=require("./routes.js");
const path= require('path');
const app=express();
const{mongo_url}=process.env;
mongoose.connect(mongo_url,{useUnifiedTopology:true,useCreateIndex:true,useNewUrlParser:true})
mongoose.connection.once('open',()=>{console.log("connected")}).on('error',()=>{console.log("error")});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname,'client/build')))
app.use('/cow',routes);
app.get('/*',(req,res)=>{
   let url= res.sendFile(path.join(__dirname+'/client/build/index.html'))
})
const Port=process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log("app is running");
})



