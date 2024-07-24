"use client"

import { MenuItemType } from '@/models/Menu'
import React from 'react'
import CategoryMenuItem from './Category/CategoryMenuItem'
import CategoryLink from './Category/CategoryLink'

type Props = {
    menu: MenuItemType
}

function MenuItem({menu}: Props) {
  const menuItems = menu.children 
  const isMenuItemsValid = menuItems && Array.isArray(menuItems) && menuItems.length > 0
  return isMenuItemsValid ? <CategoryMenuItem menu={menu} />  : <CategoryLink menu={menu} />
}

export default MenuItem