import React from 'react'
import FloatingLayout from './FloatingLayout'
import FloatingHeader from './FloatingHeader'
import FloatingBottomNavigation from './FloatingBottomNavigation'

function ProductFloatingNav() {
  return (
    <FloatingLayout>
      <div className='w-full relative block h-auto bg-white floating-border'>
        <div className='w-full flex flex-col z-[3] max-w-8xl mx-auto' >
          {/* header */}
          <FloatingHeader />
          {/* navigation menu */}
          <FloatingBottomNavigation/>
        </div>
      </div>
    </FloatingLayout>
  )
}

export default ProductFloatingNav