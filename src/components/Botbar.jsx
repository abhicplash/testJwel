import React from 'react'
import './Botbar.css'
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosOptions } from "react-icons/io";
import { Link } from 'react-router-dom';

function Botbar() {
    return (
        <div className='main-bot'>
            <div className="lang">
                <select className='select' >
                    <option >
                        EN
                    </option>
                    <option >
                        DE
                    </option>
                    <option >
                        FR
                    </option>
                    <option >
                        IT
                    </option>
                    <option >
                        RU
                    </option>
                    <option >
                        ZH
                    </option>

                </select>
            </div>
            <div className="currency">
                <select className='select' >
                    <option >
                        AED
                    </option>
                    <option >
                        USD
                    </option>
                    <option >
                        YEN
                    </option>
                    <option >
                        IND
                    </option>
                </select>
            </div>
            <Link to={"/"}>   <h5 className='h55'>Home</h5></Link>
            <Link to={"/collections"}>   <h5 className='h55'>Collections</h5></Link>
            <h5>Gold Purchase Scheme</h5>
            <h5>Gold Rate</h5>
            <div className="navicons">

                <CiSearch className='icon' />
                <AiOutlineUser className='icon' />
                <LiaShoppingBagSolid className='icon' />
            </div>
        </div>
    )
}

export default Botbar