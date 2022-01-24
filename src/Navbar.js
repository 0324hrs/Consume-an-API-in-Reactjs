import React from "react";
import './Navbar.css'


function Navbar(){

    return <div style={{backgroundColor:'blue'}}>
        <h1>React Meals</h1>
        <a href='/' style={{padding:'10px',color:'white'}}>Home</a>
        <a href='/orders' style={{padding:'10px',color:'white'}}>Orders</a>
        <a href='/contact-us' style={{padding:'10px',color:'white'}}>Contact us</a>
    </div>
}


export default Navbar