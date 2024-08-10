"use client"

import React from 'react'
import clx from 'classnames'

type Props = {
    title: string
    isActive: boolean
    onClick: () => void
}

function TabItem({
    title,
    isActive,
    onClick
}: Props) {
    const lineClassname = clx(
        "tab-line",
        {
          "tab-line-active" : isActive

        }
    )
  return (
    <li className='h-full inline-flex items-center justify-center first:ml-[8.88vw] mr-[8.88vw]  md:first:ml-[3.33vw] md:mr-[3.33vw] xl:mr-12 last:xl:mr-0 ' >
        <button 
            className='text-black text-[3.88vw] md:text-[1.25vw] xl:text-[18px] leading-[6.11vw] md:leading-[1.66vw] xl:leading-[24px] py-[1.11vw] md:py-[0.277vw] xl:py-1 font-bold text-nowrap flex flex-col'
            onClick={onClick}
        >
            {title}
            <span className={lineClassname} />
        </button>
    </li>
  )
}

export default TabItem