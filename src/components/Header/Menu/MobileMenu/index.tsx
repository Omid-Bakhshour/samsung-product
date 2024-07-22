import ModalBackground from '@/components/Common/ModalBackground'
import React from 'react'
import TopMenu from './TopMenu'
import Authentication from './Authentication'
import Menu from './Menu'

function MobileMenu() {
  return (
    <div className='flex flex-col relative' >
      {/* mobileMenu */}
      <div className='w-[360px] fixed z-[10] top-0 bottom-0 right-0 bg-white' >
        {/* topMenu */}
        <TopMenu/>
        {/* login signup */}
        <Authentication/>
        {/* menu */}
        <Menu/>
      </div>
      {/* background */}
      <ModalBackground/>
    </div>
  )
}

export default MobileMenu