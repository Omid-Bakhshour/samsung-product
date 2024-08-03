import React from 'react'

type Props = {
  slides: any[]
  activeIndex: number
}

function Indicator({
  slides,
  activeIndex,
}: Props) {
  return (
    <div className='w-full max-w-[1440px] h-[13.333vw] md:h-[5.5555vw] xl:h-20 bottom-0 left-0 absolute z-[10] flex justify-center  ' >
      <div className='flex items-center bg-[rgba(255,255,255,0.9)] md:bg-transparent rounded-full md:rounded-none' >
        {/* items */}
        <div className='flex items-center py-[1.1111vw] px-[2.2222vw] gap-[1.1111vw]'  >
          <div className='w-2.5 h-2.5 rounded-full bg-black' />

        </div>
        {/* control button */}

      </div>

    </div>
  )
}

export default Indicator