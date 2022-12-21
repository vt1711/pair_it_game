import React from 'react'
import { NavLink } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import "./ibutton.css"
const Ibutton = () => {
    return (
        <>
            <div className='ibuttondiv'>

                <NavLink
                    to="/gameinfo"
                    className={({ isActive }) =>
                        "navlinks" + (isActive ? " activenavlink " : "")
                    }
                >
                    <HiInformationCircle className='infobutton' />

                </NavLink>
            </div>
        </>
    )
}

export default Ibutton