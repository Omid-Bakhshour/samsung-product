import { MenuItemType } from '@/models/Menu'
import { RootState } from '@/redux/store';
import React from 'react'
import { FaAngleRight as RightIcon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '@/redux/slices/menu'

type Props = {
  menuItem: MenuItemType
}

function MobileMenuButton({menuItem}: Props) {
  const dispatch = useDispatch()
  const activeMenu = useSelector((state: RootState) => state.menu.activeMenu)
  const isMenuActive = activeMenu === menuItem.id


  return (
    <li className='w-full flex'>
      {/* button */}
      <button 
          className='menu-link menu-item_btn'
          onClick={() =>{
            dispatch(setActiveMenu(menuItem.id + ""))
          }} 
      >
        <span>{menuItem.title}</span>
        <RightIcon className='w-4 h-4' />
      </button>

      <div className={`w-[360px] fixed top-16 flex pb-6 z-[12] left-auto flex-col bottom-0 bg-black  ${isMenuActive ? "right-0" : "-right-full"}`}>

      </div>
    </li>
  )
}

export default MobileMenuButton