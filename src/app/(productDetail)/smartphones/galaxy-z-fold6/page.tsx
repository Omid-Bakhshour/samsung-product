import Notice from '@/components/Common/Notice'
import ProductFloatingNav from '@/components/ProductDetail/ProductFloatingNav/'
import { zfold6Notice } from '@/constants/smartphones/Zfold6'
import React from 'react'

function Page() {
  return (
    <div className='w-full flex flex-col h-[3000px]' >
      {/* notice */}
      <Notice text={zfold6Notice} />
      {/* floating nav */}
      <ProductFloatingNav/>
      {/* hero banner */}

    </div>
  )
}

export default Page