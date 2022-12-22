import React from 'react'
import { NavLink } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import "./header.css"
import pairitlogo from '../../images/pairitlogo.png';
const Header = () => {
    return (
        <>
            <div className='headerdiv'>

                <img className='gamelogo' src={pairitlogo} alt="pairitlogo" />
                <NavLink
                    to="/gameinfo"
                >
                    <HiInformationCircle className='infobutton' />
                </NavLink>
            </div>

        </>
    )
}

export default Header