import React,{useState} from 'react';
import Navbar from './navbar';
import * as api from './apiCall.js';

 function APP2(){
    
   const [val,setVal]=useState(false);
   const clickme=async()=>{
     
       const {data}=await api.chec();
       console.log(data)
   }
   
   const apiCall=async()=>{
    let formData={name:"wasiq",email:"test@gmail.com"}
    const {data}=await api.signIn(formData);
    console.log(data);
   }

     return(
         <>
         <Navbar/>
         {val?<h1>{val}</h1>:<h1>App2</h1>}
         <button onClick={clickme}>Click</button>
         <button onClick={apiCall}>Click api</button>
         </>
     )
 }

 export default APP2;