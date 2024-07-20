import { MenuItemType } from '@/models/Menu'
import Link from 'next/link'
import React from 'react'

type Props = {
  menuItem: Omit<MenuItemType, 'children'>
}

function MobileLink({menuItem}: Props) {
  return (
    <li className='w-full block'>
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