import React, { useState } from 'react'
import "./Nidhi.css"
// import Shilaimages from './Shilaimages'
import nidhi from "../images/nidhi.jpg"
function Nidhi() {
  const [view, setView] = useState(false)
  return (
    
    <div className='nidhi'>
      <h2 className='h2'>Arabian Gold And Diamond Collections</h2>
      <img className='nidhiimg' src={nidhi} alt="" />
      <div className='nidhiimgsdiv'>
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections3.webp" alt="" />
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections2.webp" alt="" />
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections1.webp" alt="" />
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections6.webp" alt="" />
        
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections5.webp" alt="" />
        <img className='nidhiimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections4.webp" alt="" />
        
        
      </div>
      
      {/* <button className='btnn' onClick={() => { setView(!view) }}>View More</button> */}
      {/* {view ? <Shilaimages /> : null} */}


    </div>
    
  
    

  )
} export default Nidhi