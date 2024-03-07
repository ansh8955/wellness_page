import React from 'react';
import './Header.css';

const Header =()=>{


    return (

        <>
        <header>
        <div className='headcontent'>
        <h1>Family Wellness</h1>
        <p>MASSAGE THERAPY</p>
        </div>
       

<div className='navbar'>

    <span><a href='#'>HOME</a></span>
    <span><a href='#'>ABOUT</a></span>
    <span><a href='#'>SERVICES</a></span>
    <span><a href='#'>FAQ</a></span>
    <span><a href='#'>CONTACT</a></span>
</div>
        </header>

        </>



    )
}

export default  Header;