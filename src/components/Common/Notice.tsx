"use client"

import React from 'react'


type Props = {
    text: string
}

function Notice({
    text
}: Props) {
    const istextValid = text && text.length > 0
    if (!istextValid) {
        return <></>
    }
    return (
        <section className='w-full block' >
            <div className='overflow-hidden relative max-w-[1440px] mx-auto text-center py-[14px] md:py-2.5 px-[66px] md:px-[52px] ' >
                {/* text */}
                {/* button */}
            </div>
        </section>
    )
}

export default Notice