import { IHeroSlider, SliderType } from '@/models/HeroSlider';
import React from 'react'
import ImageSlide from './ImageSlide';
import VideoSlide from './VideoSlide';


type Props = {
    slide: IHeroSlider
}

const blocksType = {
    [SliderType.IMAGE]: ImageSlide,
    [SliderType.VIDEO]: VideoSlide,
}

function HeroSlide({ slide }: Props) {
    const type = slide.type
    const SlideComponent = blocksType[type] || null
    if (!SlideComponent) {
        return <></>
    }

    return (
        <div className='w-full block !h-full' >
            <SlideComponent src={slide.src} />
        </div>
    )
}

export default HeroSlide