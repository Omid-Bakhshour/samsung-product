import { HeroSrcType } from '@/models/HeroSlider'
import React from 'react'

type Props = {
  src: HeroSrcType
}


function VideoSlide({src}: Props) {
  const desktopSrc = src.desktop
  const mobileSrc = src.mobile
  const isDesktopSrcValid = desktopSrc && desktopSrc.length > 0
  const isMobileSrcValid = mobileSrc && mobileSrc.length > 0
  return (
    <div className='w-full block h-full  ' >
      {
        isDesktopSrcValid && (
          <video className='w-full h-full hidden md:block' src={desktopSrc} muted autoPlay loop />
        )
      }

{
        isMobileSrcValid && (
          <video className='w-full h-full block md:hidden'  src={mobileSrc} muted autoPlay loop />
        )
      }
    </div>
  )
}

export default VideoSlide