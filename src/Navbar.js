import React from "react";
import './Navbar.css'

function Navbar(){

    return <div style={{backgroundColor:'blue'}}>
        <h1>React Meals</h1>
        <a style={{padding:'10px',color:'white'}}>Home</a>
        <a style={{padding:'10px',color:'white'}}>Orders</a>
        <a style={{padding:'10px',color:'white'}}>Contact us</a>
    </div>
}


export default Navbar