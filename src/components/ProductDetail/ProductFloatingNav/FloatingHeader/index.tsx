import React from 'react'
import HeaderUtility from './HeaderUtility'

function FloatingHeader() {
  return (
    <div className='w-full flex items-center justify-between gap-2 border-y border-floating-header' >
        {/* head line */}
        <div className='w-auto' />
        {/* utility */}
        <HeaderUtility/>
    </div>
  )
}

export default FloatingHeader