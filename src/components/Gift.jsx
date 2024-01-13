import React from 'react'
import './Gift.css'
import gift1 from '../assets/gift1.svg'
import gift2 from '../assets/gift2.svg'
import gift3 from '../assets/gift3.svg'

function Gift() {
    return (
        <div className='giftmain'>
            <div className='items'>
                <img src={gift1} alt="" />
                <h2>Direct to Consumer <br />
                    Price. <br />
                    No middleman.</h2>
                <h3>Our handcrafted jewellry is <br />
                    made in our workshop in <br />
                    Dubai and securely shipped <br />
                    to your door saving upto 30- <br />
                    40% off traditional retail <br />
                    prices.
                </h3>
                <h4><a href="">Learn More</a></h4>
            </div>
            <div className='items'>
                <img src={gift2} alt="" />
                <h2>Ethically Sourced.<br />
                    Conflict Free.</h2>
                <h3>
                    Aquae Jewels' diamonds <br />
                    come from ethical diamond <br />
                    mines, and we thus assure you <br />
                    of the legal and ethical <br />
                    origins of our stones. A <br />
                    certificate of authenticity <br />
                    accompanies each piece <br />
                    coming from Aquae Jewels.
                </h3>
                <h4><a href="">Learn More</a></h4>
            </div>
            <div className='items'>
                <img src={gift3} alt="" />
                <h2>Always Gift Boxed</h2>
                <h3>Aquae Jewels pieces come <br />
                    with pretty little white box <br />
                    decorated with a grey satin <br />
                    ribbon, you will find the <br />
                    certificate of authenticity and <br />
                    the original packaging  <br />
                    accompanying all our  <br />
                    creations.</h3>
                <h4><a href="">Learn More</a></h4>
            </div>
        </div>
    )
}

export default Gift