"use client"

import { MenuItemType } from '@/models/Menu'
import React from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileMenuLink from './MobileMenuLink'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

type Props = {
    menuItem: MenuItemType
}

function MobileMenuItem({ menuItem }: Props) {
    const isSecondaryMenuActive = useSelector((state: RootState) => state.menu.isSecondaryMenuActive)
    const isMenuHasChildren = menuItem && menuItem.children && menuItem.children.length > 0
    if (isMenuHasChildren) {
        return <MobileMenuButton menuItem={menuItem}/>
    }
    return <MobileMenuLink menuItem={menuItem} classname={isSecondaryMenuActive ? "opacity-0" : ""} />
}

export default MobileMenuItem