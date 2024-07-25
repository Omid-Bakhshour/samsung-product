import { IHeroSlider, SliderType } from '@/models/HeroSlider';
import React from 'react'
import ImageSlide from './ImageSlide';
import VideoSlide from './VideoSlide';
import SlideContent from './SlideContent';

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
        <div className='w-full block !h-full relative' >
            {/* image or Video */}
            <SlideComponent 
                src={slide.src}
                alt={slide.content.title} 
            />
            {/* content */}
            <SlideContent  
               content={slide.content}
               color={slide.color}
            />
        </div>
    )
}

export default HeroSlide