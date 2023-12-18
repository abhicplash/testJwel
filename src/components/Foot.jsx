import React from 'react'
import "./Foot.css"
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Foot() {
  return (
    <div className='foot2'>
        {/* <div className="lowerfooter"> */}
          {/* <h4>FOLLOW US</h4> */}
          <div className="icons">
            <ImFacebook2 className='icnfooter' />
            <FaInstagram className='icnfooter' />
            <PiTiktokLogoLight className='icnfooter' />
            <FiYoutube className='icnfooter' />
            <FaLinkedin className='icnfooter' />
            <FaPinterest className='icnfooter' />
            <FaWhatsapp className='icnfooter' />
          {/* </div> */}
        </div>
    </div>
  )
}

export default Foot