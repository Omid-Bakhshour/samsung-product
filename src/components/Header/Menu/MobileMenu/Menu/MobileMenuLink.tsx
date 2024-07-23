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
    <li className={`w-full block menu-opacity_animation`}>
      <Link
          href={menuItem.link}
          className={`menu-link ${classname}`}
      >
        {menuItem.title}
      
      </Link>
    </li>
  )
}

export default MobileLink