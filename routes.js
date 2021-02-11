const express= require('express');
const routes= express.Router();
const fs=require('fs');
const multer=require('multer');
var upload=multer();
const db=require('./db');

routes.post('/auth/id',async(req,res)=>{
    let {name}=req.body;
    console.log(name)
    let token="xxx900878976123";
    let result="okay"+" "+req.body.name;
    try{
    let user=await db.findOne({email:"test.ikxsli@mail.com"})
    console.log(user)
    res.status(200).json({no:token,result});
    }catch(err){console.log(err)}

    
})

routes.get('/id',async(req,res)=>{
    console.log("ho ho")
   res.status(200).json({sound:"mooo"});

})

routes.get('/del',async(req,res)=>{
       fs.unlink('./client/src/upload/test.txt',(err)=>{
           if(err){console.log(err)}
           console.log("all ok");
       });
       res.status(200).send("ok");
})

module.exports=routes;