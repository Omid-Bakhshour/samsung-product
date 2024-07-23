"use client"

import { MenuItemType } from '@/models/Menu'
import { RootState } from '@/redux/store';
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setSecondaryMenuId, } from '@/redux/slices/menu'
import SecondaryMenu from './SecondaryMenu';

type Props = {
  menuItem: MenuItemType,
}

function MobileMenuButton({ menuItem }: Props) {
  const dispatch = useDispatch()
  const isSecondryMenuActive = useSelector((state: RootState) => state.menu.isSecondaryMenuActive)

  return (
    <li className='w-full flex relative'>
      {/* button */}
      <button
        className={`menu-link menu-item_btn menu-opacity_animation ${isSecondryMenuActive ? "opacity-0" : "opacity-100"}`}
        onClick={() => {
          dispatch(setSecondaryMenuId(menuItem.id + ""))
        }}
      >
        <span>{menuItem.title}</span>
        <RightIcon className='w-4 h-4' />
      </button>
      <SecondaryMenu menuItem={menuItem} />
    </li>
  )
}

export default MobileMenuButton