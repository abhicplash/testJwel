import React from 'react'
import './Banner.css'
import banner from "../images/banner.png"
function Banner() {
  return (
    <div className='main-banner'>
        <img className='bannerimg' src={banner} alt="" />
    </div>
  )
}
export default Banner