"use client"

import React, { useState } from 'react'
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import clx from 'classnames'

function Headline() {
  const [isListOpen, setOpenList] = useState<boolean>(false)

  const listClassname = clx("absolute top-12 bottom-auto left-6 right-auto w-[236px] min-w-[236px] h-0 shadow-list-shadow bg-white h-20 z-[1] rounded-lg")

  return (
    <h2 className='relative inline-flex flex-1 gap-2 md:flex-auto h-[15.55vw] md:h-14 pr-[4.44vw] md:pr-0 pl-[6.66vw] md:pl-6 items-center justify-between md:justify-start cursor-pointer' >
      {/* title */}
      <strong className='text-black' >Galaxy Z Fold6</strong>
      {/* arrow button */}
      <ArrowDown/>

      {/* select list */}
      <div className={listClassname} >
        <ul className='w-full flex flex-col' >
          < 

        </ul>

      </div>
    </h2>
  )
}

export default Headline