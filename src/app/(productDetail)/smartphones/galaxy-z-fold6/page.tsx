import Notice from '@/components/Common/Notice'
import { zfold6Notice } from '@/constants/smartphones/Zfold6'
import React from 'react'

function Page() {
  return (
    <div className='w-full flex flex-col' >
      {/* notice */}
      <Notice text={zfold6Notice} />
      {/* floating nav */}
      {/* hero banner */}

    </div>
  )
}

export default Page