import React from "react";
import './Navbar.css'
import {FaHome} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {MdShoppingCart} from 'react-icons/md'


function Navbar(){
     
    return <div style={{backgroundColor:'#CCCCC3'}}>
        <h1 style={{ color:'black' }}> El Classico Sea Dishes </h1>
        
        <a href='/' style={{padding:'10px',color:'black'}}><FaHome size='2rem'/></a>
        <a href='/orders' style={{padding:'10px',color:'black'}}><MdShoppingCart size='2rem' /></a>
        <a href='/contacts' style={{padding:'10px',color:'black'}}><AiFillContacts size='2rem' /></a>
        
    </div>
}


export default Navbar