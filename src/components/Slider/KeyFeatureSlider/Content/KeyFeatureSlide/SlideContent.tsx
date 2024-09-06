import { ContentColorType } from '@/models/HeroSlider'
import { IKeyFeatureItem } from '@/models/KeyFeatureSlider'
import React from 'react'

type Props = {
    sliderItem: IKeyFeatureItem
    activeColor: ContentColorType
}

function SlideContent({
    sliderItem,
    activeColor,
}: Props) {
    return (
        <div>SlideContent</div>
    )
}

export default SlideContent