import React, { useState } from 'react'
import "./Shila.css"
// import Shilaimages from './Shilaimages'
import shila from "../images/shila.jpg"
function Shila() {
  const [view, setView] = useState(false)
  return (
    <div className='shilamain'>
      
      <img className='shilaimg' src={shila} alt="" />
      <div className='imgdiv'>
      <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-shila.webp" alt="" />
        <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-shila.webp" alt="" />
        <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/3-shila.webp" alt="" />
        <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-shila.webp" alt="" />
        <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-shila.webp" alt="" />
        <img className='img' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/3-shila.webp" alt="" />
        
      </div>
      {/* <button className='btnn' onClick={() => { setView(!view) }}>View More</button> */}
      {/* {view ? <Shilaimages /> : null} */}


    </div>

  )
} export default Shila