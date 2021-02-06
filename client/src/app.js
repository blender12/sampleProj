import React,{useState} from 'react';
import Navbar from './navbar';
import axios from 'axios';

function App(){
    const[val,setVal]=useState(false)
    const clikme=async()=>{
         let res= await axios({
             method:"GET",
             url:"/cow/"
         })
         let data= await res.data;
          setVal(data)
    }
    return(
        <>
        <Navbar/>
        {val?<h1>{val}</h1>:<h1>hi</h1>}
        <button onClick={clikme}>click</button>
        </>
    )
}

export default App;