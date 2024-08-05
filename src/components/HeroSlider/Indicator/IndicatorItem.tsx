import { ContentColorType, IHeroSlider } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'

type Props = {
    slide: IHeroSlider
    isActive: boolean
    activeColor: ContentColorType
} 

function IndicatorItem({
    slide,
    isActive,
    activeColor
    
}: Props) {  
  const containerClassname = clx(
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 block  rounded-full",
    {
      "bg-white": activeColor === ContentColorType.WHITE && isActive ,
      "bg-[#8f8f8f]": activeColor === ContentColorType.WHITE && !isActive,
      "bg-black": activeColor === ContentColorType.BLACK && isActive ,
      "bg-[#757575]": activeColor === ContentColorType.BLACK && !isActive,
    }
  )

  const titleClassname = clx(
    "leading-[1.31vw] text-[0.972vw] w-full line-clamp-1 text-center block",
    {
      "text-white": activeColor === ContentColorType.WHITE ,
      "text-black": activeColor === ContentColorType.BLACK ,
      "opacity-100": isActive ,
      "opacity-0 group-hover:!opacity-100": !isActive ,
    }
  )

  const lineContainerClassname = clx(
    "w-full h-[2px] block",
    {
      "bg-[rgba(0,0,0,0.4)]": activeColor === ContentColorType.BLACK && isActive,
      "bg-[rgba(0,0,0,0.2)]": activeColor === ContentColorType.BLACK && !isActive ,
      "bg-[rgba(255,255,255,0.4)]": activeColor === ContentColorType.WHITE && isActive,
      "bg-[rgba(255,255,255,0.2)]": activeColor === ContentColorType.WHITE && !isActive ,
    }
  )

  return (
    <button className='flex flex-col md:w-[11.11vw] md:min-h-[2.08vw] group' >
        {/* mobile */}
        <span className='w-[4.44vw] h-[4.44vw] block md:hidden  relative' >
            {/* dot */}
            <span className={containerClassname} />
        </span>
        {/* desktop */}
        <span className='w-full hidden md:flex flex-col gap-[0.416vw]'>
            {/* title */}
            <span className={titleClassname} >{slide.content.title}</span>
            {/* line container */}
            <span className={lineContainerClassname} >
                {/* duration line */}
                <span></span>
            </span>
        </span>



    </button>
  )
}

export default IndicatorItem