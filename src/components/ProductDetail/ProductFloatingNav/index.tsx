

import React from 'react'
import FloatingLayout from './FloatingLayout'
import FloatingHeader from './FloatingHeader'

function ProductFloatingNav() {
  return (
    <FloatingLayout>
      <div className=''>

      </div>

      <div className='w-full flex flex-col z-[3] max-w-8xl mx-auto bg-white border-b border-floating-header' >
        {/* header */}
        <FloatingHeader/>
        {/* navigation menu */}
      </div>

    </FloatingLayout>
  )
}

export default ProductFloatingNav