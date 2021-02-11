import React,{useState} from 'react';
import Navbar from './navbar';
import * as api from './apiCall.js';

function App(){
    const[val,setVal]=useState(false)
    const clikme=async()=>{
        const {data}=await api.chec();
        console.log(data)
    }
    return(
        <>
        <Navbar/>
        {val?<h1>{val}</h1>:<h1>hi</h1>}
        <button onClick={clikme}>click</button>
        <button onClick={async()=>{
            const {data}=await api.del();
            alert(data);
        }}></button>
        </>
    )
}

export default App;