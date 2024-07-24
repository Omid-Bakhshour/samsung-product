"use client"

import { RootState } from '@/redux/store';
import React from 'react'
import { GoArrowLeft as BackIcon } from "react-icons/go";
import { IoSearch  as SearchIcon } from "react-icons/io5";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setSecondaryMenuId, resetMenu } from '@/redux/slices/menu'


function TopMenu() {
  const dispatch = useDispatch()
  const isSecondaryMenuActive = useSelector((state: RootState) => state.menu.isSecondaryMenuActive)

  return (
    <div className='w-full h-14 flex items-center px-2 py-4 relative justify-end' >
        {/* back button */}
        <button 
            className={`t-menu_button absolute top-2 left-2 block menu-opacity_visibility_animation  ${isSecondaryMenuActive ? "visible opacity-100" : "invisible opacity-0"}`}
            onClick={() =>  dispatch(setSecondaryMenuId(""))}
        >
            <BackIcon className='w-7 h-7' />
        </button>
        {/* search */}
        <button className={`flex px-3 py-4 rounded-full bg-[#f7f7f7] h-10 items-center menu-width_animation w-full z-[1] ${isSecondaryMenuActive ? " ml-10" : ""}`} >
            <SearchIcon className='w-4 h-4' />
        </button>
        {/* close button */}
        <button 
            className='t-menu_button'
            onClick={() => dispatch(resetMenu())}
        >
            <CloseIcon className='w-7 h-7' />
        </button>
    </div>
  )
}

export default TopMenu