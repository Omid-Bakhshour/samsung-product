"use client"

import React, { Fragment, useRef, useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { heroSliders } from '@/constants/HeroSlider';
import HeroSlide from './HeroSlide';
import Indicator from './Indicator';
import SliderButtons from './SliderButtons';

function HeroSlider() {
    const swiperRef = useRef<SwiperClass>();
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const scrollToSlide = (i: number) => {
      if(swiperRef.current) {
        setCurrentSlide(i);
        swiperRef.current.slideToLoop(i)
      }
    };
  
    const next = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
  
    const previous = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };
  return (
    <section className='w-full max-w-8xl mx-auto h-full relative' >
        {/* swiper slider */}
        <Swiper
            loop
            slidesPerView={1}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSlideChange={() => {
                setCurrentSlide(swiperRef?.current?.realIndex || 0);
            }}
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
        {/* buttons */}
        <SliderButtons
            next={next}
            previous={previous}
        />
        {/* indicator */}
        <Indicator
           slides={heroSliders}
           activeIndex={currentSlide}
           scrollToSlide={scrollToSlide}
        />
        
    </section>
  )
}

export default HeroSlider