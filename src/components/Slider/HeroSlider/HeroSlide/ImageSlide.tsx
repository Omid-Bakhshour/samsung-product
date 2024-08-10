import { HeroSrcType } from '@/models/HeroSlider'
import React from 'react'

type Props = {
  src: HeroSrcType
  alt?: string
}

function ImageSlide({ src, alt = "banner" }: Props) {
  const desktopImage = src.desktop
  const mobileImage = src.mobile
  const isDesktopImgValid = desktopImage && desktopImage.length > 0
  const isMobileImgValid = mobileImage && mobileImage.length > 0

  return (
    <div className='w-full block relative m h-full bg-green' >
      {
        isDesktopImgValid && (
          <img
            src={desktopImage}
            className='w-full hidden md:block  h-full object-cover'
            alt={alt}
          />
        )
      }

      {
        isMobileImgValid && (
          <img
            src={mobileImage}
            className='w-full block md:hidden h-full object-cover '
            alt={alt}
          />
        )
      }
    </div>
  )
}

export default ImageSlide