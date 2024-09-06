import SlideContent from '@/components/Slider/Common/SlideContent'
import { ContentColorType } from '@/models/HeroSlider'
import { IKeyFeatureItem } from '@/models/KeyFeatureSlider'
import React from 'react'


type Props = {
    sliderItem: IKeyFeatureItem
    activeColor: ContentColorType
}

function KeyFeatureContent({
    sliderItem,
    activeColor,
}: Props) {
    return (
        <SlideContent
            color={activeColor}
            content={{
                title: sliderItem.title,
                description: sliderItem.description,
                buyNowLink: sliderItem.buyNow,
                showmoreLink: sliderItem.learnMore
            }}
        />

    )
}

export default KeyFeatureContent