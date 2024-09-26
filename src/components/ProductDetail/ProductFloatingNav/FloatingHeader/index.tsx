import React from 'react'
import HeaderUtility from './HeaderUtility'
import Headline from './Headline'

function FloatingHeader() {
  return (
    <div className='w-full flex items-center justify-between gap-2' >
        {/* head line */}
        <Headline/>
        {/* utility */}
        <HeaderUtility/>
    </div>
  )
}

export default FloatingHeader