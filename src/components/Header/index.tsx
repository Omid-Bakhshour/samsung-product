"use client"

import Link from 'next/link'
import React from 'react'
import LogoIcon from '@/icons/SamsungIcon.svg'
import Menu from './Menu'
import ActionButtons from './ActionButtons'
import MobileMenu from './Menu/MobileMenu'


function Header() {
    return (
        <nav className='w-full block items-center h-14 relative z-[2000] xl:h-20' >
            <div className='w-full h-full flex items-center max-w-[1440px] mx-auto px-4 justify-between' >
                {/* logo */}
                <div className='xl:mr-[4.4vw]' >
                    <Link
                        href={'/'}
                        className=''
                    >
                        <LogoIcon />
                    </Link>
                </div>
                {/* xl menu */}
                <Menu />
                {/* right side icons */}
                <ActionButtons/>
                {/* mobile menu */}
                <MobileMenu/>
            </div>
        </nav>
    )
}

export default Header