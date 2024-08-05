import React, { useMemo } from 'react'
import IndicatorItem from './IndicatorItem'
import { ContentColorType, IHeroSlider } from '@/models/HeroSlider'
import clx from 'classnames'

type Props = {
  slides: IHeroSlider[]
  activeIndex: number
}

function Indicator({
  slides,
  activeIndex,
}: Props) {

  const activeSlideItem = useMemo(() => {
    return slides?.[activeIndex] || slides?.[0]
  }, [slides, activeIndex])

  const activeColor = activeSlideItem?.color

  const containerClassname = clx(
    "flex items-center md:bg-transparent rounded-full md:rounded-none absolute top-0 left-1/2 -translate-x-1/2",
    {
      "bg-[rgba(0,0,0,0.9)]": activeColor === ContentColorType.WHITE,
      "bg-[rgba(255,255,255,0.9)]": activeColor === ContentColorType.BLACK,
    }
  )

  return (
    <div className='w-full max-w-[1440px] h-[13.333vw] md:h-[5.5555vw] xl:h-20 bottom-0 left-0 absolute z-[10] flex justify-center  ' >
      <div className={containerClassname} >
        {/* items */}
        <div className='flex items-center py-[1.1111vw] px-[2.2222vw] gap-[1.1111vw] x'  >
          {
            slides.map((slide, index) => {
              const isSlideActive = index === activeIndex
              return (
                <IndicatorItem
                  key={slide.id}
                  slide={slide}
                  isActive={isSlideActive}
                  activeColor={activeColor}
                />
              )
            })
          }
        </div>
        {/* control button */}

      </div>

    </div>
  )
}

export default Indicator