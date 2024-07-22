import { mobileMenu } from '@/constants/Menu'
import React from 'react'
import { MobileMenuType } from '@/models/Menu'
import MobileMenuItem from './MobileMenuItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

function Menu() {
    const isSecondryMenuActive = useSelector((state: RootState) => state.menu.isSecondryMenuActive)

    return (
        <div className={`w-full flex flex-col menu-right_animation relative ${isSecondryMenuActive ? "right-full" : "right-0"}`}>
            {
                mobileMenu.map((menuItems: MobileMenuType, index) => {
                    const isLastMenuItem = index === mobileMenu.length - 1;
                    return (
                        <ul key={index} className={`w-full flex flex-col pb-8 ${!isLastMenuItem ? 'menu-line' : 'pb-6'}`}>
                            {
                                menuItems.children.map((menuItem, itemIndex) => {
                                    return <MobileMenuItem key={itemIndex} menuItem={menuItem} />
                                })
                            }
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Menu
