"use client"

import { MenuChildItemType } from '@/models/Menu'
import React from 'react'
import { IoIosArrowDown as DownIcon } from "react-icons/io";

type Props = {
  menu: MenuChildItemType
}

function SpreadMenu({ menu }: Props) {
  const items = menu.children
  const title = menu.title

  return (
    <div className='w-full flex flex-col' >
      {/* title */}
      <h3 className='menu-link menu-l1 relative' >
        {title}
        <DownIcon className='w-4 h-4  absolute top-1/2 -translate-y-1/2 right-[18px]' />
      </h3>
      {/* items */}
    </div>
  )
}

export default SpreadMenu