import { MenuItemType } from '@/models/Menu'
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";

type Props = {
  menuItem: MenuItemType
}

function MobileMenuButton({menuItem}: Props) {
  return (
    <li className='w-full flex'>
      {/* button */}
      <button className='menu-link menu-item_btn' >
        <span>{menuItem.title}</span>
        <RightIcon className='w-4 h-4' />
      </button>
      
    </li>
  )
}

export default MobileMenuButton