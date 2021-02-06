import React,{useState} from 'react';
import Navbar from './navbar';
import axios from 'axios';

 function APP2(){
   const [val,setVal]=useState(false);
   const clickme=async()=>{
       let b="hoo ha hoo ha";
       let res=await axios({
           method:"GET",
           url:`/cow/id?sound=${b}`,
       })
       let data=await res.data;
       setVal(data);
   }
     return(
         <>
         <Navbar/>
         {val?<h1>{val}</h1>:<h1>App2</h1>}
         <button onClick={clickme}>Click</button>
         </>
     )
 }

 export default APP2;