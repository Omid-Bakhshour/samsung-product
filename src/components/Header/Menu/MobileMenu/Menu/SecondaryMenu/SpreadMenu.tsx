"use client"

import { MenuChildItemType } from '@/models/Menu'
import React from 'react'
import { IoIosArrowDown as DownIcon } from "react-icons/io";
import MobileLink from '../MobileMenuLink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setSpreadMenuId } from '@/redux/slices/menu';

type Props = {
  menu: MenuChildItemType
}

function SpreadMenu({ menu }: Props) {
  const dispatch = useDispatch()
  const items = menu.children
  const title = menu.title
  const spreadMenuId = useSelector((state: RootState) => state.menu.spreadMenuId)
  const isMenuActive = spreadMenuId === menu.id

  const isItemsValid = items && Array.isArray(items) && items.length > 0
  if(!isItemsValid) {
    return <></>
  }

  return (
    <div 
        className='w-full flex flex-col'
        onClick={() => dispatch(setSpreadMenuId(menu.id))}
    >
      {/* title */}
      <h3 className='menu-link menu-l1 relative' >
        {title}
        <DownIcon className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[18px] ${isMenuActive ? "rotate-180" : ""}`} />
      </h3>
      {/* items */}
      <ul className={`w-full flex-col bg-[#f7f7f7] overflow-hidden menu-height_animation ${isMenuActive ? "py-3 flex h-full" : " max-h-0 h-0"} `} >
        {
          items.map((menu) => {
            return (
              <MobileLink 
                  key={menu.id}
                  menuItem={menu}
                  classname='py-2.5 px-10 leading-6'
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default SpreadMenu