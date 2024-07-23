"use client"

import { MenuItemType } from '@/models/Menu'
import { RootState } from '@/redux/store'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import MobileLink from '../MobileMenuLink'
import SpreadMenu from './SpreadMenu'

type Props = {
    menuItem: MenuItemType,
}

function SecondaryMenu({ menuItem }: Props) {
    const secondaryMenuId = useSelector((state: RootState) => state.menu.secondaryMenuId)
    const isMenuSelected = secondaryMenuId === menuItem.id
    const children = menuItem.children
    const title = menuItem.title

    const shouldShowComponent = children && Array.isArray(children) && children.length > 0
    if(!shouldShowComponent) {
        return <></>
    }

    return (
        <div className={`w-[360px] fixed top-16 flex flex-col pb-6 z-[12] left-auto bottom-0 bg-transparent menu-right_animation ${isMenuSelected ? "right-0" : "-right-full"}`}>
            {/* title  */}
            <p className='pr-12 pl-6 text-[20px] font-bold w-full block leading-[48px]' >{title}</p>
            {/* menu items */}
            <ul className='w-full flex flex-col' >
                {children.map((menu, i) => {
                    if(!menu.id) {
                        return <Fragment key={i} ></Fragment>
                    }

                    const isMenuHasChildren = menu && menu.children && Array.isArray(menu.children) && menu.children .length > 0
                    return isMenuHasChildren ? (
                        <SpreadMenu 
                            menu={menu}
                            key={menu.id}
                        />
                    ) : (
                        <MobileLink 
                            key={menu.id}
                            menuItem={menu}
                            classname='menu-l1'
                        />
                    );
                })}

            </ul>



        </div>
    )
}

export default SecondaryMenu