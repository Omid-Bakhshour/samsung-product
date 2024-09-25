"use client"

import React, { useState } from 'react'
import { IoClose as CloseIcon } from "react-icons/io5";



type Props = {
    text: string
}

function Notice({
    text
}: Props) {
    const istextValid = text && text.length > 0
    const [showNotice, setShowNotice] = useState(true)
    if (!istextValid || !showNotice) {
        return <></>
    }

    return (
        <section className='w-full block bg-[#f7f7f7]' >
            <div className='overflow-hidden relative max-w-[1440px] mx-auto text-center py-[14px] md:py-2.5 px-[66px] md:px-[52px] ' >
                {/* text */}
                <span className='text-center text-[12px] md:text-[14px] leading-[1.33] font-bold max-w-full text-black md:line-clamp-2' >{text}</span>
                {/* button */}
                <button 
                    className='absolute right-7 top-2'
                    onClick={() => setShowNotice(false)}
                >
                    <CloseIcon className='w-6 h-6' />
                </button>
            </div>
        </section>
    )
}

export default Notice