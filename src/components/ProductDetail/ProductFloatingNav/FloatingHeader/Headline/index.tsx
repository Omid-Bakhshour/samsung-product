"use client"

import React, { useRef, useState } from 'react'
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import clx from 'classnames'
import { headlineList } from '@/constants/smartphones/Zfold6';
import { MdDone as DoneIcon } from "react-icons/md";
import useOutsideClick from '@/hooks/useOutsideClick';

function Headline() {
  const [isListOpen, setOpenList] = useState<boolean>(false)
  const listRef = useRef(null)
  useOutsideClick(listRef, () => setOpenList(false), isListOpen)
  const listClassname = clx("absolute top-full left-6 right-auto w-[236px] min-w-[236px] overflow-hidden h-l-animation shadow-list-shadow bg-white z-[1] rounded-lg", {
    "max-h-[300px] " : isListOpen,
    "max-h-0 ": !isListOpen
  })

  return (
    <h2 
       className='relative inline-flex flex-1 gap-2 md:flex-none h-[15.55vw] md:h-14 pr-[4.44vw] md:pr-0 pl-[5.55vw] md:pl-5 items-center justify-between md:justify-start cursor-pointer'
       onClick={() => setOpenList(!isListOpen)}
    >
      {/* title */}
      <strong className='text-black' >Galaxy Z Fold6</strong>
      {/* arrow button */}
      <ArrowDown className={`${isListOpen ? "rotate-180" : ""}`} />
      {/* select list */}
      <div 
         className={listClassname}
         ref={listRef}
         onClick={(e) => e.stopPropagation()}
      >
        <ul className='w-full flex flex-col py-2 h-auto' >
          {
            headlineList.map((headlineItem, index) => {
              return (
                <li className={`flex items-center justify-between px-5 hover:bg-[#f7f7f7] ${index === 0 ? "bg-[#f7f7f7]" : ""} cursor-pointer`}>
                  <span className={`min-h-[40px] flex items-center  text-[14px] text-black ${index === 0 ? "font-bold" : ""}`} >{headlineItem.label}</span>
                  {
                    index === 0 && (
                      <DoneIcon/>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </h2>
  )
}

export default Headline