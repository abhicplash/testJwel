import React from 'react'
import "./Video.css"
import video from "../images/vid1.mp4";
function Video() {
  return (
    <div className='main1'>
        <video className='video' src={video} autoPlay muted loop/>
        <div>
        <h1 className='h1'>About Us</h1>
        <p className='para1'>Arabian Gold & Diamonds is the realization of a  <br />
        dream andfulfillment of a vision to create a brand  <br />
         that consistently  delights the customer with excellence <br />
         and innovation.We made a humble beginning back   <br />
         in 2000.Since then we have been aiming to gradually    <br />
         expand our presence by developing a strong and <br />
         satisfied customer base
        </p>
        </div>
    </div>
  )
}

export default Video