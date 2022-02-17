import React from "react";
import './Navbar.css'


function Navbar(){

    return <div style={{backgroundColor:'#CCCCC3'}}>
        <h1 style={{ color:'black' }}>Kinuthia Foods </h1>
        <a href='/' style={{padding:'10px',color:'black'}}>Home</a>
        <a href='/orders' style={{padding:'10px',color:'black'}}>Orders</a>
        <a href='/contacts' style={{padding:'10px',color:'black'}}>Contact us</a>
    </div>
}


export default Navbar