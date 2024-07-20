import { RootState } from '@/redux/store';
import Link from 'next/link'
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";
import { useSelector } from 'react-redux';


function Authentication() {
    const activeMenu = useSelector((state: RootState) => state.menu.activeMenu)
    const isMenuActive = activeMenu && activeMenu.length > 0
    return (
        <div className={`w-full pt-4 pb-8 flex flex-col menu-line relative transition-all transform duration-300 ease-in-out ${isMenuActive ? "right-full opacity-0" : "right-0"}`} >
            {/* login */}
            <Link
                href={'/'}
                className='menu-link'

            >
                Log-in/Sign Up
            </Link>
            {/* desc link */}
            <div className='w-full block px-6' >
                <Link
                    href={'/'}
                    className='flex gap-1 items-center text-[12px] text-black'
                >
                    <span>Why Create a Samsung Account?</span>
                    <RightIcon className='w-4 h-4' />
                </Link>
            </div>
        </div>
    )
}

export default Authentication