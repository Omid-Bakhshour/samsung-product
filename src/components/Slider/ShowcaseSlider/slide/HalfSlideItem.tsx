import Badge from '@/components/Common/Badge'
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
    <div className='w-1/2 md:w-1/4 h-1/3 md:h-1/2 pr-[4.44vw] md:pr-[1.66vw] xl:pr-6 pb-[4.44vw] md:pb-[1.66vw] xl:pb-6 relative inline-block sc-small group' >
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
        <div className='absolute top-[3.88vw] md:top-[1.66vw] xl:top-6 left-[4.44vw] md:left-[1.66vw] xl:left-6' >
          <Badge type={badge} />
        </div>
        {/* title */}
        <div className='w-full  absolute left-1/2 -translate-x-1/2 px-[1.11vw] xl:px-4 bottom-[3.88vw] md:bottom-[5vw] xl:bottom-[72px] mx-auto ' >
          <span className='text-[3.33vw] md:text-[1.25vw] xl:text-[18px] max-h-[15.83vw] md:max-h-[4.44vw] xl:max-h-16 text-center font-bold line-clamp-3' >{item.title}</span>
        </div>
        {/* button */}
        <div className='inline-block md:absolute h-[2.77vw] xl:h-10 bottom-[0.27vw] visible opacity-0 md:group-hover:bottom-[1.66vw] xl:group-hover:bottom-6 md:group-hover:visible md:group-hover:opacity-100 xl:b-1 left-1/2 -translate-x-1/2 sc-anim_btn' >
          <span className='rounded-btn rounded-btn_black' >buy now</span>
        </div>
      </Link>

    </div>
  )
}

export default HalfSlideItem