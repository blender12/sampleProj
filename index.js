const express=require('express');
const cors =require('cors');
const routes=require("./routes.js");
const path= require('path');
const app=express();
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



