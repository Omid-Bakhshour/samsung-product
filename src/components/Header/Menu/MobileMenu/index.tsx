"use client"

import ModalBackground from '@/components/Common/ModalBackground'
import React from 'react'
import TopMenu from './TopMenu'
import Authentication from './Authentication'
import Menu from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { resetMenu } from "@/redux/slices/menu"
import { RootState } from '@/redux/store'

function MobileMenu() {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector((state: RootState) => state.menu.isMobileMenuOpen)

  return (
    <div>
      {/* mobileMenu */}
      <div className={`w-[360px] fixed z-[10] top-0 bottom-0 menu-right_animation bg-white overflow-x-hidden ${isMobileMenuOpen ? "right-0" : "-right-full"}`} >
        {/* topMenu */}
        <TopMenu/>
        {/* login signup */}
        <Authentication/>
        {/* menu */}
        <Menu/>
      </div>
      {/* background */}
      <ModalBackground
          onClickHandler={() => dispatch(resetMenu())}
          visible={isMobileMenuOpen === true}
      />
    </div>
  )
}

export default MobileMenu