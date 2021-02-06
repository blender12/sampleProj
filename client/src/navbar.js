import React from 'react';
import {Link} from 'react-router-dom';

function navbar(){
    return(
        <>
        <Link to="/"><button>home</button></Link>
        <Link to="/App2"><button>App2</button></Link>
        </>
    )
}


export default navbar;