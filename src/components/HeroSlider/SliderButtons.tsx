"use client"

import React from 'react'
import { 
    FaChevronLeft as LeftIcon,
    FaChevronRight as RightIcon 
} from "react-icons/fa6";

type Props = {
    next: () => void
    previous: () => void
}

function SliderButtons({
    next,
    previous
}: Props) {
  return (
    <>
    <button
        className='h-s-btn position left-2.5'
        onClick={previous}
    >
        <LeftIcon className='icon' />
    </button>

    <button
        className='h-s-btn position right-2.5'
        onClick={next}
    >
        <RightIcon className='icon' />
    </button>
    </>
  )
}

export default SliderButtons