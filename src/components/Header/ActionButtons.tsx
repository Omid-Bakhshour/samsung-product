"use client"

import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";

function ActionButtons() {
    // const 
    return (
        <div className='w-full xl:w-auto justify-end flex items-center h-full xl:ml-[1.9444444vw]' >
            {/* search */}
            <div className='header-icon_container mr-2 xl:mr-[0.55555vw]' >
                <button className='icon-padding' >
                    <IoIosSearch className='w-6 h-6 block'  />
                </button>
            </div>
            {/* cart */}
            <div className='header-icon_container mr-2 xl:mr-[0.55555vw]' >
                <button className='icon-padding' >
                    <IoCartOutline className='w-6 h-6 block'  />
                </button>
            </div>
            {/* profile */}
            <div className='header-icon_container mr-2 xl:mr-[0.55555vw]' >
                <button className='icon-padding' >
                    <FiUser className='w-6 h-6 block'  />
                </button>
            </div>
            {/* mobile menu */}
            <div className='header-icon_container mr-2 xl:hidden' >
                <button className='icon-padding' >
                    <LuMenu className='w-6 h-6 block'  />
                </button>
            </div>
        </div>
    )
}

export default ActionButtons