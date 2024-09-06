import { IKeyFeatureItem } from '@/models/KeyFeatureSlider'
import React from 'react'
import KeyFeatureImage from './KeyFeatureImage'

type Props = {
    sliderItem: IKeyFeatureItem
    activeColor: string
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
        
    </div>
  )
}

export default KeyFeatureSlide