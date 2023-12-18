import React from 'react'
import './Product.css'
import Button from '../elements/Button'
function Product() {
    return (
        <div className="main-product" >
            <h3>Arabian Gold And Diamond Collections</h3>
            <div className='submain' >
                <div>
                    <img className='collectionimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections3.webp" alt="" />
                    <h5>PRECIOUS STONE JEWELLERY</h5>
                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections2.webp" alt="" />
                    <h5>SIGNITY JEWELLERT COLLECTION</h5>

                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-shila.webp" alt="" />
                    <h5>ANTIQUE JEWELLWRY</h5>
                </div>
            </div>
            <div className='submain' >
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-siri.webp" alt="" />
                    <h5>DIAMOND JEWELLERY </h5>
                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/nila-2.webp" alt="" />
                    <h5>UNCUT DIAMOND</h5>
                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/2-lekshya.webp" alt="" />
                    <h5>CHETTINAD JEWELLERY</h5>
                </div>
            </div>
            <div className='submain' >
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/noora-3.webp" alt="" />
                    <h5>Necklaces</h5>
                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/1-zara.webp" alt="" />
                    <h5>KIDS JEWELLERY</h5>
                </div>
                <div>
                    <img src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/04/3-yuma.webp" alt="" />
                    <h5>ROSE GOLD JEWELLERY</h5>
                </div>
            </div>
            <Button abhilash="click" />
        </div>
    )
}
export default Product