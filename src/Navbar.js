import React from "react";
import './Navbar.css'
import {FaHome} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {MdShoppingCart} from 'react-icons/md'


function Navbar(){
     
    return <div style={{backgroundColor:'#fdf2e9'}}>
        <h1 style={{ color:'black' }}> El Classico Sea Dishes </h1>
        <ul className="list">
            <li><a  class='li-list' href="/">Home</a></li>
            <li><a  class='li-list' href="/services">Services</a></li>
            <li><a  class='li-list' href="/orders">Orders</a></li>
        </ul>
        
        {/* <a class='icons' href='/' ><FaHome /></a> */}
        {/* <a class='icons' href='/orders' style={{padding:'10px',color:'black'}}><MdShoppingCart size='2rem' /></a> */}
        {/* <a class='icons' href='/contacts' style={{padding:'10px',color:'black'}}><AiFillContacts size='2rem' /></a> */}
        
    </div>
}


export default Navbar