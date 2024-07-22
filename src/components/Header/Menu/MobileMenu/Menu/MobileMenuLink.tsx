import { MenuItemType } from '@/models/Menu'
import Link from 'next/link'
import React from 'react'

type Props = {
  menuItem: Omit<MenuItemType, 'children'>
  classname?: string
}

function MobileLink({
  menuItem,
  classname = ""
}: Props) {
  return (
    <li className={`w-full block menu-opacity_animation ${classname}`}>
      <Link
          href={menuItem.link}
          className='menu-link'
      
      >
        {menuItem.title}
      
      </Link>
    </li>
  )
}

export default MobileLink