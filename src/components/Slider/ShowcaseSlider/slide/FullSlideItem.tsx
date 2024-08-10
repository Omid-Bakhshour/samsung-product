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
    <div className='relative inline-block w-full md:w-1/2 h-1/3 md:h-full pr-[4.44vw] md:pr-[1.66vw] pb-[4.44vw] md:pb-[1.66vw] xl:pr-6 xl:pb-6 group ' >
      <Link
        href={'/'}
        className='relative inline-block w-[86.66vw] h-[48.88vw] md:w-full md:h-full'
      >
        {/* img */}
        <div className='absolute left-0 bottom-0 top-0 w-full h-full rounded-[5.55vw] md:rounded-[1.38vw] xl:rounded-[20px] !overflow-hidden  ' >
          {
            isDesktopImgValid && (
              <img
                src={desktopImage}
                className='w-full hidden md:block  h-full object-cover showcase-animation group-hover:scale-105'
                alt={item.title}
              />
            )
          }

          {
            isMobileImgValid && (
              <img
                src={mobileImage}
                className='w-full block md:hidden h-full object-cover showcase-animation group-hover:scale-105'
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
          <div className='relative block w-full mb-[1.11vw] md:mb-0 md:absolute md:bottom-[5.55vw] xl:bottom-[72px] md:w-[27.77vw] xl:w-[480px]  md:left-1/2 md:-translate-x-1/2' >
            <span className='text-[3.88vw] md:text-[1.66vw] xl:text-[24px] max-h-[15.83vw] md:max-h-[4.44vw] xl:max-h-16 text-left md:text-center font-bold line-clamp-3' >{item.title}</span>
          </div>
          {/* desc */}
          <div className='relative max-h-[7.77vw] text-[2.77vw] md:absolute md:bottom-[3.33vw] md:w-[27.77vw] xl:bottom-12 xl:w-[400px] md:text-[0.97vw] xl:text-[14px] md:left-1/2 md:-translate-x-1/2 text-left md:text-center' >
            <span>{item.description}</span>
          </div>
        </div>
        {/* buy now button */}
      </Link>
    </div>
  )
}

export default FullSlideItem