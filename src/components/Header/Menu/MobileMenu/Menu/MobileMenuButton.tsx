import { MenuItemType } from '@/models/Menu'
import { RootState } from '@/redux/store';
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setSecondryMenuId, } from '@/redux/slices/menu'
import SecondryMenu from './SecondryMenu';

type Props = {
  menuItem: MenuItemType,
}

function MobileMenuButton({ menuItem }: Props) {
  const dispatch = useDispatch()
  const isSecondryMenuActive = useSelector((state: RootState) => state.menu.isSecondryMenuActive)

  return (
    <li className='w-full flex relative'>
      {/* button */}
      <button
        className={`menu-link menu-item_btn menu-opacity_animation ${isSecondryMenuActive ? "opacity-0" : "opacity-100"}`}
        onClick={() => {
          dispatch(setSecondryMenuId(menuItem.id + ""))
        }}
      >
        <span>{menuItem.title}</span>
        <RightIcon className='w-4 h-4' />
      </button>
      <SecondryMenu menuItem={menuItem} />
    </li>
  )
}

export default MobileMenuButton