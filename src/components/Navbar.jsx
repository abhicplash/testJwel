import React from 'react'
import './Navbar.css'
import logo from "../images/logo.png"
function Navbar() {
    return (
        <div className='main-nav'>
            <img className='imgg' src={logo} alt="" />
        </div>
    )
}
export default Navbar