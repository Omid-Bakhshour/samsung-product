import { IKeyFeatureItem } from '@/models/KeyFeatureSlider'
import React from 'react'
import KeyFeatureImage from './KeyFeatureImage'
import SlideContent from './KeyFeatureContent'
import { ContentColorType } from '@/models/HeroSlider'

type Props = {
    sliderItem: IKeyFeatureItem
    activeColor: ContentColorType
}

function KeyFeatureSlide({
    sliderItem,
    activeColor,
}: Props) {
  return (
    <div className='w-full h-[769px] xl:h-[800px] block ' >
      {/* image */}
      <KeyFeatureImage
         src={sliderItem.image}
         alt={sliderItem.tabLabel}
      />
      {/* slide content */}
      <SlideContent
          activeColor={activeColor}
          sliderItem={sliderItem}
      />
    </div>
  )
}

export default KeyFeatureSlide