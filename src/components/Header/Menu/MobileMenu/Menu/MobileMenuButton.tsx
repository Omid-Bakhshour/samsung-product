import { MenuItemType } from '@/models/Menu'
import { RootState } from '@/redux/store';
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setSecondryMenuId, } from '@/redux/slices/menu'

type Props = {
  menuItem: MenuItemType
}

function MobileMenuButton({menuItem}: Props) {
  const dispatch = useDispatch()
  const secondryMenuId = useSelector((state: RootState) => state.menu.secondryMenuId)
  const isSecondryMenuActive = useSelector((state: RootState) => state.menu.isSecondryMenuActive)
  const isMenuSelected = secondryMenuId === menuItem.id

  return (
    <li className='w-full flex relative'>
      {/* button */}
      <button 
          className={`menu-link menu-item_btn menu-opacity_animation ${isSecondryMenuActive ? "opacity-0" : "opacity-100" }`}
          onClick={() =>{
            dispatch(setSecondryMenuId(menuItem.id + ""))
          }} 
      >
        <span>{menuItem.title}</span>
        <RightIcon className='w-4 h-4' />
      </button>

      <div className={`w-[360px] fixed top-16 flex pb-6 z-[12] left-auto flex-col bottom-0 bg-transparent menu-right_animation ${ isMenuSelected ? "right-0" : "-right-full hidden"}`}>

      </div>
    </li>
  )
}

export default MobileMenuButton