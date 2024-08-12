import { IShowcaseItem } from '@/models/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

type Props = {
  item: IShowcaseItem
}

function HalfSlideItem({
  item
}: Props) {
  const desktopImage = item.src.desktop
  const mobileImage = item.src.mobile
  const isDesktopImgValid = desktopImage && desktopImage.length > 0
  const isMobileImgValid = mobileImage && mobileImage.length > 0
  const badge = item.badge
  
  return (
    <div className='w-1/2 md:w-1/4 h-1/3 md:h-1/2 pr-[4.44vw] md:pr-[1.66vw] xl:pr-6 pb-[4.44vw] md:pb-[1.66vw] xl:pb-6 relative inline-block sc-small' >
      <Link
        className='relative w-full h-full inline-block cursor-pointer text-black'
        href={'/'}

      >
        {/* image */}
        <div className='sc-img_container' >
          {
            isDesktopImgValid && (
              <img
                src={desktopImage}
                className='w-full hidden md:block h-full object-cover sc-anim_img md:group-hover:scale-105'
                alt={item.title}
              />
            )
          }

          {
            isMobileImgValid && (
              <img
                src={mobileImage}
                className='w-full block md:hidden h-full object-cover sc-anim_img md:group-hover:scale-105'
                alt={item.title}
              />
            )
          }

        </div>
        {/* badge */}
        {/* title */}
        {/* button */}
      </Link>

    </div>
  )
}

export default HalfSlideItem