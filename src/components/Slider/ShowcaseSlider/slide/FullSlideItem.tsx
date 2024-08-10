import Badge from '@/components/Common/Badge'
import { IShowcaseItem } from '@/models/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

type Props = {
  item: IShowcaseItem
}


function FullSlideItem({
  item,
}: Props) {
  const desktopImage = item.src.desktop
  const mobileImage = item.src.mobile
  const isDesktopImgValid = desktopImage && desktopImage.length > 0
  const isMobileImgValid = mobileImage && mobileImage.length > 0
  const badge = item.badge

  return (
    <div className='relative inline-block w-full md:w-1/2 h-1/3 md:h-full pr-[4.44vw] md:pr-[1.66vw] pb-[4.44vw] md:pb-[1.66vw] xl:pr-6 xl:pb-6 ' >
      <Link
        href={'/'}
        className='relative inline-block w-[86.66vw] h-[48.88vw] md:w-full md:h-full'
      >
        {/* img */}
        <div className='absolute left-0 bottom-0 top-0 w-full h-full rounded-[5.55vw] md:rounded-[1.38vw] xl:rounded-[20px] overflow-hidden' >
          {
            isDesktopImgValid && (
              <img
                src={desktopImage}
                className='w-full hidden md:block  h-full object-cover'
                alt={item.title}
              />
            )
          }

          {
            isMobileImgValid && (
              <img
                src={mobileImage}
                className='w-full block md:hidden h-full object-cover '
                alt={item.title}
              />
            )
          }
        </div>
        {/* content */}
        <div className='relative w-[37.22vw] md:w-full left-[45.55vw] md:left-0 h-full flex flex-col justify-center' >
          {/* badge */}
          <div className='realtive block md:absolute top-auto md:top-[1.66vw] xl:top-6 left-auto md:left-[1.66vw] xl:left-6 mb-[1.11vw] md:mb-0' >
            <Badge type={badge} />
          </div>

          {/* title */}
          {/* desc */}

        </div>
        {/* buy now button */}
      </Link>
    </div>
  )
}

export default FullSlideItem