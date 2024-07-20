import { MenuItemType } from '@/models/Menu'
import React from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileMenuLink from './MobileMenuLink'

type Props = {
    menuItem: MenuItemType
}

function MobileMenuItem({ menuItem }: Props) {
    const isMenuHasChildren = menuItem && menuItem.children && menuItem.children.length > 0
    if (isMenuHasChildren) {
        return <MobileMenuButton menuItem={menuItem} />
    }
    return <MobileMenuLink menuItem={menuItem} />
}

export default MobileMenuItem