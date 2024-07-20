import ModalBackground from '@/components/Common/ModalBackground'
import React from 'react'
import TopMenu from './TopMenu'

function MobileMenu() {
  return (
    <div>
      {/* mobileMenu */}
      <div className='w-[360px] fixed z-[10] top-0 bottom-0 right-0 bg-white' >
        {/* topMenu */}
        <TopMenu/>
        {/* login signup */}
        {/* menu */}
      </div>

      {/* background */}
      <ModalBackground/>
    </div>
  )
}

export default MobileMenu