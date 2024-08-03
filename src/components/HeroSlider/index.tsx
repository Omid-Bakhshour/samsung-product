"use client"

import React, { Fragment } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperClass } from 'swiper';
import { heroSliders } from '@/constants/HeroSlider';
import HeroSlide from './HeroSlide';
import Indicator from './Indicator';

function HeroSlider() {
  return (
    <section className='w-full max-w-8xl mx-auto h-full relative' >
        {/* swiper slider */}
        <Swiper
            loop
            slidesPerView={1}

        
        >
            {
                heroSliders.map((slide, index) => {
                    const isSlideValid = slide && slide.id && slide.id > 0
                    if(!isSlideValid) {
                        return <Fragment key={index} ></Fragment>
                    }

                    return (
                        <SwiperSlide className='w-full h-full block' >
                            <HeroSlide key={slide.id} slide={slide} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        {/* indicator */}
        <Indicator
           slides={heroSliders}
           activeIndex={0}
        />
        
    </section>
  )
}

export default HeroSlider