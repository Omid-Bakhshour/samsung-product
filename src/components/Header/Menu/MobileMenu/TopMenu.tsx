import React from 'react'
import { GoArrowLeft as BackIcon } from "react-icons/go";
import { IoSearch  as SearchIcon } from "react-icons/io5";
import { MdOutlineClose as CloseIcon } from "react-icons/md";

function TopMenu() {
  return (
    <div className='w-full h-14 flex items-center px-2 py-4' >
        {/* back button */}
        <button className='t-menu_button' >
            <BackIcon className='w-7 h-7' />
        </button>
        {/* search */}
        <button className='w-full flex px-3 py-4 rounded-full bg-[#f7f7f7] h-10 items-center' >
            <SearchIcon className='w-4 h-4' />

        </button>
        {/* close button */}
        <button className='t-menu_button' >
            <CloseIcon className='w-7 h-7' />
        </button>
    </div>
  )
}

export default TopMenu