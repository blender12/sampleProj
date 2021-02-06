const express= require('express');
const routes= express.Router();

routes.get('/',(req,res)=>{
    res.send("mooo");
})

routes.get('/:id',(req,res)=>{
    res.send(req.query.sound);
})

module.exports=routes;