import React from 'react'
import "./Loginpage.css"
function Loginpage() {
  return (
    <div className='loginpage'>
        <div className='login'>
            <h3>LOGIN</h3>
        <input className='input' type="text" placeholder='UserName' />
        <input className='input' type="text" placeholder='Password' />
        <button className='btn'>LOGIN</button>
        </div>
    </div>
  )
}

export default Loginpage