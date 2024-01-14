// import React from 'react'
import "./Siri.css"
import sirii from "../Images/siri.jpg"
import React, { useState } from 'react'
function Siri() {
    const [view, setView] = useState(false)
    return (
        <div className='siri'>
            <img className='siriimg' src={sirii} alt="" />
            <div className="siriimgsdiv" >
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-siri.webp" alt="" />
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-siri.webp" alt="" />
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/3-siri.webp" alt="" />
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-siri.webp" alt="" />
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-siri.webp" alt="" />
                <img className='siriimgs' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/3-siri.webp" alt="" />
                
            </div>
        </div>
    )
}

export default Siri