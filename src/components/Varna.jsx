import React, { useState } from 'react'
import "./Varna.css"

import varna from "../images/varna.jpg"
function Varna() {
  const [view, setView] = useState(false)
  return (
    <div className='varna'>
      
      <img className='varnaimg' src={varna} alt="" />
      <div className='varnaimgsdiv'>
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections1.webp" alt="" />
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections2.webp" alt="" />
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections3.webp" alt="" />
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections4.webp" alt="" />
        
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/05/varna.webp" alt="" />
        <img className='varnaimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections6.webp" alt="" />
        
      </div>
      {/* <button className='btnn' onClick={() => { setView(!view) }}>View More</button> */}
      {/* {view ? <Shilaimages /> : null} */}


    </div>

  )
} export default Varna