const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({user:String,email:{type:String,unique:true},array:{type:Array}});
const user=mongoose.model("user_collec",userSchema);
module.exports=user;
