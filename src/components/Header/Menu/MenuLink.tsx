import { MenuItemType } from '@/models/Menu'
import Link from 'next/link'
import React from 'react'

type Props = {
  menuItem: Omit<MenuItemType, 'children'>
  classname?: string
}

function MenuLink({
  menuItem,
  classname = ""
}: Props) {
  return (
    <li className={`w-full block `}>
      <Link
          href={menuItem.link}
          className={`menu-link menu-opacity_animation ${classname}`}
      >
        {menuItem.title}
      
      </Link>
    </li>
  )
}

export default MenuLink