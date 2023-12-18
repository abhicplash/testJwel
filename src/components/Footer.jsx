import React from 'react'
import './Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo.png"
function Footer() {
  return (
    <div className='footer'>
      <div className='logodiv'>
        <img className='logoimg' src={logo} alt="" />
        <div className="lowerfooter">
          <h4>FOLLOW US</h4>
          <div className="icons">
            <ImFacebook2 className='icnfooter' />
            <FaInstagram className='icnfooter' />
            <PiTiktokLogoLight className='icnfooter' />
            <FiYoutube className='icnfooter' />
            <FaLinkedin className='icnfooter' />
            <FaPinterest className='icnfooter' />
            <FaWhatsapp className='icnfooter' />
          </div>
        </div>
      </div>
      <ul className='footerlist'>
        <li>
          <h3>CONTACT US</h3>
        </li>
        <li>  Link Road, Kayamkulam-INDIA</li>
        <li>  Tel: 0479 2445757</li>
        <li>  Customer Care: 9847 570333</li>
        <li>  First Floor, Nesto Hyper Market,</li>
        <li>  Mushriff, Ajman-UAE</li>
        <li>  P.O BOX:1637</li>
        <li>  Office 305, HIND7,Waterfront</li>
        <li>  Opp.Gold Centre Building</li>
        <li>Gold Souq Deira-UAE</li>
      </ul>
      <ul className='footerlist'>
        <li>
          <h3>INFORMATION</h3>
        </li>
        <li>  About Us</li>
        <li>  Privacy Policy</li>
        <li>  Terms And Conditions</li>
        <li>  Frequently Asked Questions</li>
      </ul>
    </div>
  )
}
export default Footer