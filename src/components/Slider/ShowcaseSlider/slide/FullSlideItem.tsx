import { IShowcaseItem } from '@/models/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

type Props = {
    item: IShowcaseItem
}


function FullSlideItem({
    item,
}: Props) {
  return (
    <div className='relative block w-full md:w-1/2 h-1/3 md:h-full pr-[4.44vw] md:pr-[1.66vw] pb-[4.44vw] md:pb-[1.66vw] xl:pr-6 xl:pb-6 ' >
      <Link
          href={'/'}
          className='relative block w-[86.66vw] h-[48.88vw] md:w-full md:h-full'
      >
        {/* img */}
        {/* content */}
        {/* buy now button */}
      </Link>
    </div>
  )
}

export default FullSlideItem